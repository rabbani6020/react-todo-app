import React from "react";

const Pagination = ({
  todosPerPage,
  totalTodos,
  paginate,
  currentPage,
  nextPaginate,
  prevPaginate,
}) => {
  const pageNumbers = [];
  const totalPage = Math.ceil(totalTodos / todosPerPage);
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${totalPage < 0 ? "disabled" : ""} `}>
          <a className="page-link" href="#" onClick={prevPaginate}>
            Prev
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li className="page-item" key={pageNumber}>
            <a
              onClick={() => paginate(pageNumber)}
              className="page-link"
              href="#"
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPage ? "disabled" : ""
          } `}
        >
          <a className="page-link" href="#" onClick={nextPaginate}>
            Next
            <p className="lead">
              currentPage={currentPage}, totalPage={totalPage}
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
