import React from "react";

const Pagination = ({ todosPerPage, totalTodos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((pageNumber) => (
          <li className="page-item" key={pageNumber}>
            <a
              onClick={() => paginate(pageNumber)}
              className="page-link"
              href="!#"
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
