import * as S from './styles';

const links = [
    {
        id: 0,
        link: '/',
        title: 'Início',
    },
    {
        id: 1,
        link: '/characters',
        title: 'Personagens',
    },
    {
        id: 2,
        link: '/comics',
        title: 'Quadrinhos',
    },
    {
        id: 3,
        link: '/creators',
        title: 'Criadores',
    },
    {
        id: 4,
        link: '/keys',
        title: 'Suas Chaves',
    },
];

export const Header = () => {
    return (
        <S.Header>
            <ul>
                {links.map((item) => {
                    return (
                        <li key={item.id}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
        </S.Header>
    );
};
