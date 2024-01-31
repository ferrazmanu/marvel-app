import styled from 'styled-components';

export const FormContainer = styled.div`
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
        gap: 30px;
        padding: 3dvw;
        border: 1px solid #fff;
        border-radius: 15px;
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
        gap: 30px;
    }

    .input-box {
        display: flex;
        flex-direction: column;
        gap: 8px;

        label {
            font-family: ${({ theme }) => theme.fonts.primary};
            font-size: ${({ theme }) => theme.fontSizes.medium_24};
            text-transform: uppercase;
        }

        .input-wrapper {
            border-bottom: 1px solid #fff;
            padding: 0 8px;
        }

        input {
            background-color: transparent !important;
            appearance: none;
            border: none;
            height: 38px;
            color: ${({ theme }) => theme.colors.white};
            width: 100%;
            font-size: ${({ theme }) => theme.fontSizes.small_18};
        }
    }
`;
