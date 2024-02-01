import React, { Dispatch, useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { useDispatch, useSelector } from 'react-redux';
import { setComics } from '../../redux/actions';
import { selectAuth, selectComics } from '../../redux/selectors';
import { UnknownAction } from 'redux';
import { Container } from '../../components/Container';
import Loading from '../../components/Loading';
import Paginate from '../../components/Paginate';
import { MainWrapper } from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';

const fetchComics = async (
    dispatch: Dispatch<UnknownAction>,
    pageNumber: number,
    searchValue?: string
) => {
    const limit = 20;
    const offset = pageNumber * limit;

    try {
        const response = await http.get('comics', {
            params: {
                offset: offset >= 0 ? offset : 0,
                limit,
                titleStartsWith: searchValue || null,
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

    const isUserAuth = useSelector(selectAuth);
    const comics = useSelector(selectComics);

    const pageCount = Math.ceil(comics.total / 20);

    const handlePageClick = (event: { selected: number }) => {
        const { selected } = event;
        setLoading(true);
        fetchComics(dispatch, selected).then(() => setLoading(false));
    };

    useEffect(() => {
        AuthenticateUser(dispatch);
        if (isUserAuth) {
            setLoading(true);
            fetchComics(dispatch, 0).then(() => setLoading(false));
        }
    }, [dispatch, isUserAuth]);

    return (
        <MainWrapper>
            <Container fullheight>
                <PageTitle
                    title="Quadrinhos"
                    searchFunc={(value: string) => {
                        setLoading(true);
                        fetchComics(dispatch, 0, value).then(() =>
                            setLoading(false)
                        );
                    }}
                />
                {loading ? (
                    <Loading />
                ) : (
                    <div className="grid">
                        {comics?.results.length > 0 ? (
                            comics.results.map((item) => {
                                return (
                                    <a
                                        href={`/comics/${item.id}`}
                                        className="item"
                                        key={item.id}
                                    >
                                        <p>{item.title}</p>
                                        <img
                                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                        />
                                    </a>
                                );
                            })
                        ) : (
                            <p>Nenhum resultado.</p>
                        )}
                    </div>
                )}

                <Paginate
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                />
            </Container>
        </MainWrapper>
    );
};

export default Comics;
