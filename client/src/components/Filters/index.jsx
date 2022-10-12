import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterGenres,
  getGenres,
  getOrderAbc,
  getRating,
  getVideogames,
  sortByOrigin,
} from "../../redux/actions";
import { useEffect, useState } from "react";

function Filters({ setOrder, order }) {
  const dispatch = useDispatch();
  const genresState = useSelector((state) => state.genres);

  const [select, setSelect] = useState({ genres: [] });

  const orderAbc = (e) => {
    dispatch(getOrderAbc(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };

  const orderRating = (e) => {
    dispatch(getRating(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };

  // const genresSelect = (e) => {
  //   setSelect({
  //     ...select,
  //     genres: [...select.genres, e.target.value],
  //   });
  // };

  const cardsGenres = (e) => {
    dispatch(filterGenres(e.target.value));
  };

  const orderOrigin = (e) => {
    dispatch(sortByOrigin(e.target.value));
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <span className={styles.filter}>
        <p>Ordenar por</p>

        <select onChange={(e) => orderAbc(e)} className={styles.select}>
          <option value="all" hidden>
            Nombre
          </option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>

        <select onChange={(e) => orderOrigin(e)} className={styles.select}>
          <option value="all">...</option>
          <option value="api">Existentes</option>
          <option value="db">Creados</option>
        </select>

        <select onChange={(e) => cardsGenres(e)} className={styles.select}>
          {/* <select onChange={genresSelect}> */}
          <option value="genres">Generos</option>
          {genresState.map((genre) => (
            <option value={genre.name} key={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>

        <select onChange={(e) => orderRating(e)} className={styles.select}>
          <option value="rating" hidden>
            Rating
          </option>
          <option value="max">Más populares</option>
          <option value="min">Menos populares</option>
        </select>
      </span>
    </div>
  );
}

export default Filters;
