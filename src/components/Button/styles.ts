import styled from 'styled-components';

interface Props {
    maxWidth?: string;
}

export const Button = styled.button<Props>`
    background-color: ${({ theme }) => theme.colors.tertiary};
    appearance: none;
    border: 2px solid ${({ theme }) => theme.colors.white};
    height: 42px;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.small_12};
    font-weight: 600;
    cursor: pointer;
    padding: 6px 8px;
    width: 100%;
    margin: 0 auto;
    max-width: ${(props) => props.maxWidth};
`;
