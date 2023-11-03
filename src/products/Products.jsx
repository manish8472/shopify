import { useState } from "react";
import "./Products.css";

//-------------This component showing all product and page-navigation ---------------------

function products({ result }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(24);
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const records = result.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(result.length / postsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  console.log(numbers);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  function handlePrevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <section className="card-container">{records}</section>
      <div className="page-navigation">
        <button className="page-link page-link2" onClick={handlePrevPage}>
          Prev
        </button>
        {numbers.map((n, i) => (
          <button
            className={`page-link ${currentPage === n ? "page-active" : ""}`}
            key={i}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
        <button className="page-link page-link2" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </>
  );
}

export default products;
