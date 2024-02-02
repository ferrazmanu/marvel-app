import styled from 'styled-components';

export const Paginate = styled.div`
    padding: 20px;
    margin-top: auto;

    ul {
        display: flex;
        justify-content: center;
        gap: 8px;
        font-size: ${({ theme }) => theme.fontSizes.small_18};
        align-items: center;

        li {
            background-color: transparent;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 30px;
            min-width: 30px;

            a {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                cursor: pointer;
                color: ${({ theme }) => theme.colors.white};
            }
        }

        li.selected {
            background-color: ${({ theme }) => theme.colors.secondary};

            a {
                color: ${({ theme }) => theme.colors.white};
            }
        }
    }
`;
