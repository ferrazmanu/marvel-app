import React, { Dispatch, useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from '../../redux/actions';
import { selectCharacters } from '../../redux/selectors';
import { UnknownAction } from 'redux';
import { Container } from '../../components/Container';

const fetchCharacters = async (dispatch: Dispatch<UnknownAction>) => {
    try {
        const response = await http.get('characters');

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        dispatch(setCharacters(response.data.data.results));
    } catch (e) {
        console.error(e);
    }
};

const Characters: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const characters = useSelector(selectCharacters);

    useEffect(() => {
        if (!AuthenticateUser()) return;
        setLoading(true);
        fetchCharacters(dispatch).then(() => setLoading(false));
    }, [dispatch]);

    return (
        <Container>
            <h2>Personagens</h2>

            <div>
                {loading ? (
                    <p>Carregando</p>
                ) : (
                    <ul>
                        {characters?.length > 0 ? (
                            characters.map((data) => {
                                return <li key={data.id}>{data.name}</li>;
                            })
                        ) : (
                            <p>Nenhum resultado</p>
                        )}
                    </ul>
                )}
            </div>
        </Container>
    );
};

export default Characters;
