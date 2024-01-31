import React, { Dispatch, useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from '../../redux/actions';
import { selectCharacters } from '../../redux/selectors';
import { UnknownAction } from 'redux';
import { Container } from '../../components/Container';
import { Loading } from '../../components/Loading';
import { Paginate } from '../../components/Paginate';

const fetchCharacters = async (
    dispatch: Dispatch<UnknownAction>,
    pageNumber: number
) => {
    const limit = 20;
    const offset = pageNumber * limit;

    try {
        const response = await http.get('characters', {
            params: {
                offset: offset >= 0 ? offset : 0,
                limit,
            },
        });

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        dispatch(setCharacters(response.data.data));
    } catch (e) {
        console.error(e);
    }
};

const Characters: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const characters = useSelector(selectCharacters);

    const pageCount = Math.ceil(characters.total / 20);

    const handlePageClick = (event: { selected: number }) => {
        const { selected } = event;
        setLoading(true);
        fetchCharacters(dispatch, selected).then(() => setLoading(false));
    };

    useEffect(() => {
        if (!AuthenticateUser()) return;
        setLoading(true);
        fetchCharacters(dispatch, 1).then(() => setLoading(false));
    }, [dispatch]);

    return (
        <Container>
            <h2>Personagens</h2>

            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <ul>
                        {characters?.results.length > 0 ? (
                            characters.results.map((item) => {
                                return <li key={item.id}>{item.name}</li>;
                            })
                        ) : (
                            <p>Nenhum resultado.</p>
                        )}
                    </ul>
                )}
            </div>

            <Paginate onPageChange={handlePageClick} pageCount={pageCount} />
        </Container>
    );
};

export default Characters;
