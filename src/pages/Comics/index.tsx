import React, { Dispatch, useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { useDispatch, useSelector } from 'react-redux';
import { setComics } from '../../redux/actions';
import { selectComics } from '../../redux/selectors';
import { UnknownAction } from 'redux';
import { Container } from '../../components/Container';
import { Loading } from '../../components/Loading';
import { Paginate } from '../../components/Paginate';

const fetchComics = async (
    dispatch: Dispatch<UnknownAction>,
    pageNumber: number
) => {
    const limit = 20;
    const offset = pageNumber * limit;

    try {
        const response = await http.get('comics', {
            params: {
                offset: offset >= 0 ? offset : 0,
                limit,
            },
        });

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        dispatch(setComics(response.data.data));
    } catch (e) {
        console.error(e);
    }
};

const Comics: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const comics = useSelector(selectComics);

    const pageCount = Math.ceil(comics.total / 20);

    const handlePageClick = (event: { selected: number }) => {
        const { selected } = event;
        setLoading(true);
        fetchComics(dispatch, selected).then(() => setLoading(false));
    };

    useEffect(() => {
        if (!AuthenticateUser()) return;
        setLoading(true);
        fetchComics(dispatch, 1).then(() => setLoading(false));
    }, [dispatch]);

    return (
        <Container>
            <h2>Quadrinhos</h2>

            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <ul>
                        {comics?.results.length > 0 ? (
                            comics.results.map((item) => {
                                return <li key={item.id}>{item.title}</li>;
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

export default Comics;
