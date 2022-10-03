import styles from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { getOrderAbc, getRating, getVideogames } from "../../redux/actions";

function Filters({ setOrder, order }) {
  const dispatch = useDispatch();

  const orderAbc = (e) => {
    dispatch(getOrderAbc(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };

  const orderRating = (e) => {
    dispatch(getRating(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }

  return (
    <div>
      <span className={styles.filter}>
        <p>Ordenar por</p>

        <select onChange={(e) => orderAbc(e)}>
          <option value="all" hidden>
            Nombre
          </option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>

        <select>
          <option value="all">...</option>
          <option value="api">Existentes</option>
          <option value="bd">Creados</option>
        </select>

        <select>
          <option value="genres">Generos</option>
        </select>

        <select onChange={(e) => orderRating(e)}>
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
