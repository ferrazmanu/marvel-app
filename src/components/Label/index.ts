import styled from 'styled-components';

export const Label = styled.label`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
    text-transform: uppercase;
`;
