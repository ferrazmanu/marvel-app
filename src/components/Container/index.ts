import styled, { css } from 'styled-components';

interface Props {
    gradient?: boolean;
    fullHeight?: boolean;
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

export const Container = styled.div<Props>`
    max-width: 80dvw;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing._30};
    padding: 2dvh 15px;
    height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
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
