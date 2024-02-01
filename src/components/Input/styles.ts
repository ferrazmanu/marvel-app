import styled from 'styled-components';

export const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    padding: 0 8px;

    input {
        background-color: transparent !important;
        appearance: none;
        border: none;
        height: 38px;
        color: ${({ theme }) => theme.colors.white};
        width: 100%;
        font-size: ${({ theme }) => theme.fontSizes.small_18};
    }
`;
