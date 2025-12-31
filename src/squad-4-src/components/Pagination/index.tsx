import type { PaginationProps } from "./interface";
import { Container, NavButton, Info } from "./styles";

export const Pagination = ({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) => {
  return (
    <Container>
      <NavButton
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      >
        Prev
      </NavButton>

      <Info>
        {currentPage} / {totalPages}
      </Info>

      <NavButton
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
      >
        Next
      </NavButton>
    </Container>
  );
};
