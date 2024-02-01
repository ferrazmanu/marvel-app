import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;
    padding-bottom: 30px;

    h2,
    h3 {
        font-family: ${({ theme }) => theme.fonts.secondary};
    }

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.medium_30};
    }

    h3 {
        text-transform: unset;
        font-size: ${({ theme }) => theme.fontSizes.medium_24};
    }

    p {
    }

    .attatched-bg {
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 200px;
    }
`;
