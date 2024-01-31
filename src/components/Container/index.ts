import styled from 'styled-components';

export const Container = styled.div`
    max-width: 80dvw;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing._30};
    padding: 2dvh 15px;
`;

export const FullContainer = styled.div`
    max-width: 100dvw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;
