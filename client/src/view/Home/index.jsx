import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Videogames from "../../components/Videogames";
import Nav from "../../components/Nav";
import Pagination from "../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { useEffect, useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  // console.log(allVideogames);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [gamePerPage] = useState(15);
  const lastGame = currentPage * gamePerPage;
  const firstGame = lastGame - gamePerPage;

  const filteredVideogames = allVideogames.slice(firstGame, lastGame)

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


//   console.log('filteredVideogame= '+ filteredVideogames);

//   const filteredVideogames = allVideogames.slice(currentPage, currentPage + 15);

  useEffect(() => {
    setLoading(true);
    dispatch(getVideogames());
    setLoading(false);
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Pagination
        gamePerPage={gamePerPage}
        allVideogames={allVideogames.length}
        // paged={paged}
        // filteredVideogames={filteredVideogames}
        // pageNumber={pageNumber}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className={styles.home}>
        <Link to="/form">
          <button className={styles.button}>Formulario</button>
        </Link>
        <Videogames allVideogames={filteredVideogames} />
      </div>
    </div>
  );
}

export default Home;
