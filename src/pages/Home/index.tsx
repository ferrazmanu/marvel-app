import React, { useEffect } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import { Container, FullContainer } from '../../components/Container';

import img from '../../assets/images/tchala-img.jpg';
import { useDispatch } from 'react-redux';

const Home: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        AuthenticateUser(dispatch);
    }, [dispatch]);

    return (
        <FullContainer gradient={true}>
            <img src={img} loading="eager" />

            <Container fullheight>
                <div className="content">
                    <h1>Marvel App</h1>
                    <p>
                        Aproveite para explorar o website e conhecer seus heróis
                        favoritos!
                    </p>
                </div>
            </Container>
        </FullContainer>
    );
};

export default Home;
