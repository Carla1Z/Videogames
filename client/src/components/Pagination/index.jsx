import styles from "./Pagination.module.css";

function Pagination({
  currentPage,
  setCurrentPage,
  allVideogames,
  gamePerPage,
  paged,
}) {
  const nextPage = () => {
    if (currentPage < pageNumber.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  //------------------------------------------------------

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allVideogames / gamePerPage); i++) {
    pageNumber.push(i);
  }

  //   console.log("numero de pagina=" + pageNumber);

  return (
    <div className={styles.pagination}>
      <button onClick={prevPage}>Anterior</button>

      <div>
        <ul className={styles.numbers}>
          {pageNumber.map((number) => (
            <li key={number}>
              <button onClick={() => paged(number)} className={styles.button}>{number}</button>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={nextPage}>Siguiente</button>
    </div>
  );
}

export default Pagination;
