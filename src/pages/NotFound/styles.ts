import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;

    p {
        font-size: ${({ theme }) => theme.fontSizes.small_18};
    }

    .not-found {
        backdrop-filter: blur(8px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: ${({ theme }) => theme.spacing._30};
        padding: 3dvw;
        max-width: 60%;
        width: 100%;
        margin: 4dvw auto;
        z-index: 10;
        text-align: center;
        border-radius: 15px;
    }
`;
