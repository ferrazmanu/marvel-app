import styled from 'styled-components';

interface Props {
    maxWidth?: string;
}

export const Button = styled.button<Props>`
    background-color: ${({ theme }) => theme.colors.tertiary};
    appearance: none;
    border: 2px solid ${({ theme }) => theme.colors.white};
    height: 45px;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    cursor: pointer;
    padding: 3px 8px;
    width: 100%;
    margin: 0 auto;
    max-width: ${(props) => props.maxWidth};

    font-size: ${({ theme }) => theme.fontSizes.medium_24};
    font-family: ${({ theme }) => theme.fonts.primary};
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;
