function Pagination({
  currentPage,
  setCurrentPage,
  allVideogames,
  filteredVideogames,
  paged,
}) {
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  //------------------------------------------------------

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allVideogames / filteredVideogames); i++) {
    pageNumber.push(i);
  }

//   console.log("numero de pagina=" + pageNumber);

  return (
    <div>
      <button onClick={prevPage}>Anterior</button>

      <div>
        <ul>
          {pageNumber.map((number) => (
              <li key={number}>
                <a onClick={() => paged(number)} href="!#">{number}</a>
              </li>
            ))}
        </ul>
      </div>

      <button onClick={nextPage}>Siguiente</button>
    </div>
  );
}

export default Pagination;
