export const DOTS = "...";

function usePagination(currentPage) {
  const current = currentPage.currentPage;
  const pagination = [];
  const paginationWithDots = [];
  const pagesTotal = Math.ceil(currentPage.totalCount / currentPage.pageSize);

  for (let i = 1; i < pagesTotal; i++) {
    pagination.push(i);
  }
  if (pagesTotal > 3) {
    if (current === 2) {
      paginationWithDots.push(1, current, current + 1, DOTS, pagesTotal);
    } else if (current > 2 && current < pagesTotal - 1) {
      paginationWithDots.push(
        1,
        DOTS,
        current - 1,
        current,
        current + 1,
        DOTS,
        pagesTotal
      );
    } else if (current === pagesTotal - 1) {
      paginationWithDots.push(1, DOTS, current - 1, current, pagesTotal);
    } else if (current === pagesTotal) {
      paginationWithDots.push(1, DOTS, current - 2, current - 1, current);
    } else
      paginationWithDots.push(
        current,
        current + 1,
        current + 2,
        DOTS,
        pagesTotal
      );
    return paginationWithDots;
  } else return pagination;

  /*
 This hook accepts object "currentPage" as an argument and cheks if total amout of pages more than 3.
 If it's lower than 3 then we return array with siblings of current page and current page but without dots
 since it dosen't satisfy any of our conditions to implement dots, and if it'sgreater than 3 we make
 custom array in which depends on the current page number we push current page,siblings and dots.
  */
}

export default usePagination;
