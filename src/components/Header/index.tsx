import { FC } from 'react';
import { links } from './constants';
import * as S from './styles';

const Header: FC = () => {
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

export default Header;
