import { FC } from 'react';
import * as S from './styles';
import ReactPaginate from 'react-paginate';

interface Props {
    onPageChange: (selected: { selected: number }) => void;
    pageCount: number;
}

const Paginate: FC<Props> = ({ onPageChange, pageCount }) => {
    return (
        <S.Paginate>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={onPageChange}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </S.Paginate>
    );
};

export default Paginate;
