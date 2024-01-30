import React, { useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import http from '../../service/config';
import { CharactersProps } from './types';

const Characters: React.FC = () => {
    const [dataList, setDataList] = useState<CharactersProps[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const response = await http.get('characters');

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
            setDataList(response.data.data.results);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (AuthenticateUser()) {
            fetchCharacters();
        }
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
            <h2>Personagens</h2>

            <div>
                {loading ? (
                    <p>Carregando</p>
                ) : (
                    <ul>
                        {dataList?.length > 0 ? (
                            dataList.map((data) => {
                                return <li key={data.id}>{data.name}</li>;
                            })
                        ) : (
                            <p>Nenhum resultado</p>
                        )}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Characters;
