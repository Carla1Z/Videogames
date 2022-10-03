import styles from "./SearchBar.module.css";
import lupa from "../../assets/lupa.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../redux/actions";

function SearchBar({setCurrentPage}) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const input = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log("Busqueda: " + e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(getName(search));
    setCurrentPage(1)
    setSearch("");
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => input(e)}
          className={styles.input}
        />
        <button
          type="submit"
          onClick={(e) => submit(e)}
          className={styles.button}
        >
          <img src={lupa} alt="Buscar" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
