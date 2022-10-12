import styles from "./Home.module.css";
import banner from "./../../assets/banner.jpg";
import { Link } from "react-router-dom";
import Videogames from "../../components/Videogames";
import Nav from "../../components/Nav";
import Pagination from "../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { useEffect, useState } from "react";
import Filters from "../../components/Filters";

function Home({ search, setSearch }) {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  // console.log(allVideogames);

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamePerPage] = useState(15);

  const lastGame = currentPage * gamePerPage;
  const firstGame = lastGame - gamePerPage;
  const filteredVideogames = allVideogames.slice(firstGame, lastGame);

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //ORDENAMIENTO
  const [order, setOrder] = useState("");

  useEffect(() => {
    // setLoading(true);
    dispatch(getVideogames());
    // setLoading(false);
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <Nav setCurrentPage={setCurrentPage} />
        <Link to="/" className={styles.link}>
          <img src={banner} alt="videogames banner" className={styles.banner}/>
        </Link>

      <div className={styles.menu}>
        <div className={styles.barra}>
          <Link to="/form">
            <button className={styles.buttonForm}>Formulario</button>
          </Link>
          <Filters setOrder={setOrder} />
        </div>
        <Videogames allVideogames={filteredVideogames} />
        <Pagination
          allVideogames={allVideogames.length}
          gamePerPage={gamePerPage}
          paged={paged}
          // filteredVideogames={filteredVideogames}
          // pageNumber={pageNumber}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Home;
