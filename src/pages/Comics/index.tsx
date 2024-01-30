import React, { useEffect, useState } from 'react';
import { AuthenticateUser } from '../../utils/authUser';
import { ComicsProps } from './types';
import http from '../../service/config';

const Comics: React.FC = () => {
    const [dataList, setDataList] = useState<ComicsProps[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchComics = async () => {
        setLoading(true);
        try {
            const response = await http.get('comics');

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
            fetchComics();
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
            <h2>Quadrinhos</h2>

            <div>
                {loading ? (
                    <p>Carregando</p>
                ) : (
                    <ul>
                        {dataList?.length > 0 ? (
                            dataList.map((data) => {
                                return <li key={data.id}>{data.title}</li>;
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

export default Comics;
