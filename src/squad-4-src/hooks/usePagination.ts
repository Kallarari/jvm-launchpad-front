import { useState, useEffect } from "react";

export function usePagination(totalPages: number) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  function goTo(page: number) {
    if (page < 1) return;
    if (page > totalPages) return;
    setCurrentPage(page);
  }

  return { currentPage, totalPages, goTo };
}
