import { FC } from 'react';
import * as S from './styles';
import { Container } from '../Container';

interface Props {
    title?: string;
    description?: string;
    image?: string;
    series?: [{ name: string }];
    stories?: [{ name: string }];
    characters?: [{ name: string }];
    creators?: [{ name: string; role: string }];
    comics?: [{ name: string }];
    events?: [{ name: string }];
}

const DetailContent: FC<Props> = ({
    title,
    description,
    image,
    series,
    stories,
    characters,
    creators,
    comics,
    events,
}) => {
    return (
        <S.Wrapper>
            <Container>
                <h2>{title}</h2>
            </Container>

            <div
                style={{ backgroundImage: `url(${image})` }}
                className="attatched-bg"
            />

            {!(
                series?.length ||
                stories?.length ||
                events?.length ||
                characters?.length ||
                creators?.length ||
                comics?.length
            ) ? (
                <Container>
                    <div>
                        <p>
                            Ops... parece que não temos nenhuma informação sobre
                            isso no momento!
                        </p>
                    </div>
                </Container>
            ) : (
                <Container>
                    {description && (
                        <div>
                            <h3>Descrição</h3>
                            <p>{description}</p>
                        </div>
                    )}

                    {series && series?.length > 0 && (
                        <div>
                            <h3>Séries</h3>
                            <ul>
                                {series.map((item) => {
                                    return <li key={item.name}>{item.name}</li>;
                                })}
                            </ul>
                        </div>
                    )}

                    {stories && stories?.length > 0 && (
                        <div>
                            <h3>Histórias</h3>
                            <ul>
                                {stories.map((item) => {
                                    return <li key={item.name}>{item.name}</li>;
                                })}
                            </ul>
                        </div>
                    )}

                    {characters && characters?.length > 0 && (
                        <div>
                            <h3>Personagens</h3>
                            <ul>
                                {characters.map((item) => {
                                    return <li key={item.name}>{item.name}</li>;
                                })}
                            </ul>
                        </div>
                    )}

                    {creators && creators?.length > 0 && (
                        <div>
                            <h3>Criadores</h3>
                            <ul>
                                {creators.map((item) => {
                                    return (
                                        <li key={item.name}>
                                            {item.name}{' '}
                                            {item.role && `- ${item.role}`}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}

                    {comics && comics?.length > 0 && (
                        <div>
                            <h3>Quadrinhos</h3>
                            <ul>
                                {comics.map((item) => {
                                    return (
                                        <li key={item.name}>{item.name} </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}

                    {events && events?.length > 0 && (
                        <div>
                            <h3>Eventos</h3>
                            <ul>
                                {events.map((item) => {
                                    return (
                                        <li key={item.name}>{item.name} </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </Container>
            )}
        </S.Wrapper>
    );
};

export default DetailContent;
