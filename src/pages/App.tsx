import React, { useEffect } from 'react';
import { AuthenticateUser } from '../utils/authUser';

const Home: React.FC = () => {
    useEffect(() => {
        AuthenticateUser();
    }, []);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li>
                        <a href="/characters">Personagens</a>
                    </li>
                    <li>
                        <a href="/comics">Quadrinhos</a>
                    </li>
                    <li>
                        <a href="/creators">Criadores</a>
                    </li>
                    <li>
                        <a href="/keys">Suas Chaves</a>
                    </li>
                </ul>
            </nav>
            <h1> Hello home page</h1>
        </>
    );
};

export default Home;
