import styled from 'styled-components';

export const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    padding: 0 8px;
    position: relative;

    button {
        display: flex;
        cursor: pointer;
        position: absolute;
        right: 3px;
        top: 50%;
        transform: translateY(-50%);
        color: ${({ theme }) => theme.colors.white};
    }

    input {
        height: 38px;
        color: ${({ theme }) => theme.colors.white};
        width: 100%;
        font-size: ${({ theme }) => theme.fontSizes.small_18};
    }
`;
