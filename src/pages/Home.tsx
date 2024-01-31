import React, { useEffect } from 'react';
import { AuthenticateUser } from '../utils/authUser';
import { FullContainer } from '../components/Container';
import { Video } from '../components/Video';

import video from '../assets/images/tchala-video.mp4';

const Home: React.FC = () => {
    useEffect(() => {
        AuthenticateUser();
    }, []);

    return (
        <FullContainer>
            <Video autoPlay muted loop id="tchala">
                <source src={video} type="video/mp4" />
            </Video>
        </FullContainer>
    );
};

export default Home;
