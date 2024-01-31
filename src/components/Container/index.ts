import styled, { css } from 'styled-components';

interface Props {
    gradient?: boolean;
    fullgradient?: boolean;
    fullheight?: boolean;
    center?: boolean;
}

const gradient = css`
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        height: inherit;
        width: inherit;
        z-index: 1;

        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(9, 5, 36, 1) 100%
        );
    }
`;

const fullgradient = css`
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        height: inherit;
        width: inherit;
        z-index: 1;
        background-color: rgba(9, 5, 36, 0.8);
    }
`;

export const Container = styled.div<Props>`
    max-width: 80dvw;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    ${(props) => props.center && 'justify-content:center'};
    gap: ${({ theme }) => theme.spacing._30};
    padding: 2dvh 15px;
    height: ${(props) => (props.fullheight ? '100%' : 'auto')};
`;

export const FullContainer = styled.div<Props>`
    max-width: 100dvw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    inset: 0;
    ${(props) => props.gradient && gradient};
    ${(props) => props.fullgradient && fullgradient};

    img {
        position: absolute;
        height: inherit;
        width: inherit;
        inset: 0;
        object-fit: cover;
        z-index: 1;
    }

    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 5;
        align-items: center;
        text-align: center;

        h1 {
            text-transform: uppercase;
            font-size: ${({ theme }) => theme.fontSizes.big_64};
        }

        p {
            font-size: ${({ theme }) => theme.fontSizes.medium_24};
        }
    }
`;
