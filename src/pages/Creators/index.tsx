import React, { Dispatch, useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { setCreators } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCreators } from '../../redux/selectors';
import { UnknownAction } from 'redux';
import { Container } from '../../components/Container';
import { Loading } from '../../components/Loading';

const fetchCreators = async (dispatch: Dispatch<UnknownAction>) => {
    try {
        const response = await http.get('creators');

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        dispatch(setCreators(response.data.data.results));
    } catch (e) {
        console.error(e);
    }
};

const Creators: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const creators = useSelector(selectCreators);

    useEffect(() => {
        if (!AuthenticateUser()) return;
        setLoading(true);
        fetchCreators(dispatch).then(() => setLoading(false));
    }, [dispatch]);

    return (
        <Container>
            <h2>Criadores</h2>

            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <ul>
                        {creators?.length > 0 ? (
                            creators.map((data) => {
                                return <li key={data.id}>{data.fullName}</li>;
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

export default Creators;
