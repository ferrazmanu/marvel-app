import React, { Dispatch, useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { useDispatch, useSelector } from 'react-redux';
import { setCreators } from '../../redux/actions';
import { selectComics } from '../../redux/selectors';
import { UnknownAction } from 'redux';
import { Container } from '../../components/Container';
import { Loading } from '../../components/Loading';

const fetchComics = async (dispatch: Dispatch<UnknownAction>) => {
    try {
        const response = await http.get('comics');

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        dispatch(setCreators(response.data.data.results));
    } catch (e) {
        console.error(e);
    }
};

const Comics: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const comics = useSelector(selectComics);

    useEffect(() => {
        if (!AuthenticateUser()) return;
        setLoading(true);
        fetchComics(dispatch).then(() => setLoading(false));
    }, [dispatch]);

    return (
        <Container>
            <h2>Quadrinhos</h2>

            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <ul>
                        {comics?.length > 0 ? (
                            comics.map((data) => {
                                return <li key={data.id}>{data.title}</li>;
                            })
                        ) : (
                            <p>Nenhum resultado.</p>
                        )}
                    </ul>
                )}
            </div>
        </Container>
    );
};

export default Comics;
