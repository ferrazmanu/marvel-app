import React, { Dispatch, useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { setCreators } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCreators } from '../../redux/selectors';
import { UnknownAction } from 'redux';
import { Container } from '../../components/Container';
import { Loading } from '../../components/Loading';
import { Paginate } from '../../components/Paginate';

const fetchCreators = async (
    dispatch: Dispatch<UnknownAction>,
    pageNumber: number
) => {
    const limit = 20;
    const offset = pageNumber * limit;
    try {
        const response = await http.get('creators', {
            params: {
                offset: offset >= 0 ? offset : 0,
                limit,
            },
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
    const creators = useSelector(selectCreators);

    const pageCount = Math.ceil(creators.total / 20);

    const handlePageClick = (event: { selected: number }) => {
        const { selected } = event;
        setLoading(true);
        fetchCreators(dispatch, selected).then(() => setLoading(false));
    };

    useEffect(() => {
        if (!AuthenticateUser()) return;
        setLoading(true);
        fetchCreators(dispatch, 1).then(() => setLoading(false));
    }, [dispatch]);

    return (
        <Container>
            <h2>Criadores</h2>

            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <ul>
                        {creators?.results.length > 0 ? (
                            creators.results.map((item) => {
                                return <li key={item.id}>{item.fullName}</li>;
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

export default Creators;
