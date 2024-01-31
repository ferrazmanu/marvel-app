import * as S from './styles';
import ReactPaginate from 'react-paginate';

interface Props {
    onPageChange: (selected: { selected: number }) => void;
    pageCount: number;
}

export const Paginate = ({ onPageChange, pageCount }: Props) => {
    return (
        <S.Paginate>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={onPageChange}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </S.Paginate>
    );
};
