import styled from 'styled-components';

export const MainWrapper = styled.main`
    /* altura minima removendo o tamanho do header e do footer */
    min-height: calc(100dvh - 121px);

    @media only screen and (max-width: 800px) {
        min-height: calc(100dvh - 50px);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        grid-column-gap: ${({ theme }) => theme.spacing._30};
        grid-row-gap: 40px;

        @media only screen and (max-width: 414px) {
            display: flex;
            flex-direction: column;
        }

        .item {
            width: 100%;
            display: flex;
            flex-direction: column;
            max-width: 300px;

            p {
                text-align: center;
                padding: 8px;
                border-top: 3px solid ${({ theme }) => theme.colors.secondary};
                border-bottom: 3px solid
                    ${({ theme }) => theme.colors.secondary};
                font-size: ${({ theme }) => theme.fontSizes.small_18};
                font-family: ${({ theme }) => theme.fonts.secondary};
                font-weight: 500;
                height: -webkit-fill-available;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img {
                aspect-ratio: 211/179;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`;
