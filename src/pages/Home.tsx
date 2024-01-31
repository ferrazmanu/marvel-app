import React, { useEffect } from 'react';
import { AuthenticateUser } from '../utils/authUser';
import { Container, FullContainer } from '../components/Container';

import img from '../assets/images/tchala-img.jpg';

const Home: React.FC = () => {
    useEffect(() => {
        AuthenticateUser();
    }, []);

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
