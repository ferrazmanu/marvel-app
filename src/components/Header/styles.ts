import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    z-index: 10;

    ul {
        display: flex;
        justify-content: space-between;
        gap: ${({ theme }) => theme.spacing._30};
        padding: 45px 30px;
        max-width: 50dvw;
        width: 100%;
        margin: 0 auto;

        li {
            text-transform: uppercase;
            font-size: ${({ theme }) => theme.fontSizes.small_18};
            font-family: ${({ theme }) => theme.fonts.primary};

            a {
                transform: perspective(1px) translateZ(0);
                box-shadow: 0 0 1px rgb(0 0 0 / 0%);
                position: relative;
                overflow: hidden;
                color: ${({ theme }) => theme.colors.white};

                &::before {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    left: 51%;
                    right: 51%;
                    bottom: -3px;
                    background: ${({ theme }) => theme.colors.secondary};
                    height: 2px;
                    -webkit-transition-property: left, right;
                    transition-property: left, right;
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
                    -webkit-transition-timing-function: ease-out;
                    transition-timing-function: ease-out;
                }

                &:hover::before {
                    left: 0;
                    right: 0;
                }
            }
        }
    }
`;
