import React, { Dispatch, useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { setCreators } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectCreators } from '../../redux/selectors';
import { UnknownAction } from 'redux';
import { Container } from '../../components/Container';
import Loading from '../../components/Loading';
import Paginate from '../../components/Paginate';
import { MainWrapper } from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';
import { FiltersProps } from '../../types/types';
import { options } from './constants';

const fetchCreators = async (
    dispatch: Dispatch<UnknownAction>,
    pageNumber: number,
    filters?: FiltersProps
) => {
    const limit = 20;
    const offset = pageNumber * limit;

    let params;
    if (
        !filters?.selectedFilterType ||
        filters?.selectedFilterType === 'creators'
    ) {
        params = {
            offset: offset >= 0 ? offset : 0,
            limit,
            nameStartsWith: filters?.search || null,
        };
    } else {
        params = {
            offset: offset >= 0 ? offset : 0,
            limit,
            nameStartsWith: filters?.search || null,
            [filters.selectedFilterType]: filters?.filtersIds,
        };
    }

    try {
        const response = await http.get('creators', {
            params,
        });

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        dispatch(setCreators(response.data.data));
    } catch (e) {
        console.error(e);
    }
};

const Creators: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const isUserAuth = useSelector(selectAuth);
    const creators = useSelector(selectCreators);

    const pageCount = Math.ceil(creators.total / 20);

    const handlePageClick = (event: { selected: number }) => {
        const { selected } = event;
        setLoading(true);
        fetchCreators(dispatch, selected).then(() => setLoading(false));
    };

    useEffect(() => {
        AuthenticateUser(dispatch);
        if (isUserAuth) {
            setLoading(true);
            fetchCreators(dispatch, 0).then(() => setLoading(false));
        }
    }, [dispatch, isUserAuth]);

    return (
        <MainWrapper>
            <Container fullheight>
                <PageTitle
                    title="Criadores"
                    filtertype={options}
                    searchFunc={(value: FiltersProps) => {
                        setLoading(true);
                        fetchCreators(dispatch, 0, value).then(() =>
                            setLoading(false)
                        );
                    }}
                />

                {loading ? (
                    <Loading />
                ) : (
                    <div className="grid">
                        {creators?.results.length > 0 ? (
                            creators.results.map((item) => {
                                return (
                                    <a
                                        href={`/creators/${item.id}`}
                                        className="item"
                                        key={item.id}
                                    >
                                        <p>{item.fullName}</p>
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

export default Creators;
