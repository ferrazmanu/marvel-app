import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    z-index: 5;

    ul {
        display: flex;
        justify-content: space-between;
        gap: ${({ theme }) => theme.spacing._30};
        padding: 45px 30px;
        max-width: 70dvw;
        width: 100%;
        margin: 0 auto;

        li {
            text-transform: uppercase;
            font-size: ${({ theme }) => theme.fontSizes.small_12};
        }
    }
`;
