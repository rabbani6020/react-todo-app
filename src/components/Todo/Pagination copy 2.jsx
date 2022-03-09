import React from "react";

const Pagination = ({
  currentPage,
  totalPage,
  pageHandler,
  pagePrevHandler,
  pageNextHandler,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  console.log(currentPage);
  console.log(totalPage);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        
        {totalPage > 1 && (
          <li className="page-item">
          <a className="page-link" href="#" onClick={pagePrevHandler}>
            Previous
          </a>
        </li>
        )}
        {pageNumbers.map((pageNumber) => (
          <li className="page-item" key={pageNumber}>
            <a
              className="page-link"
              href="#"
              onClick={() => pageHandler(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        {currentPage < totalPage && (
          <li className="page-item">
            <a className="page-link" href="#" onClick={pageNextHandler}>
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
