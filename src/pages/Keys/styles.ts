import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;

    .title {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h2 {
            font-size: ${({ theme }) => theme.fontSizes.medium_32};
        }

        p {
            font-size: ${({ theme }) => theme.fontSizes.small_18};
        }
    }

    form {
        backdrop-filter: blur(8px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: ${({ theme }) => theme.spacing._30};
        padding: 3dvw;
        border-top: 1px solid ${({ theme }) => theme.colors.white};
        border-bottom: 1px solid ${({ theme }) => theme.colors.white};
        position: relative;
        height: 100%;
        max-width: 60%;
        width: 100%;
        margin: 4dvw auto;
        z-index: 10;
    }

    .form-content {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing._30};
    }

    .input-box {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;
