import styles from "./SearchBar.module.css";
import lupa from "../../assets/lupa.png";

function SearchBar() {
  return (
    <div>
      <form className={styles.form}>
        <input type="text" className={styles.input} />
        <button type="submit" className={styles.button}>
          <img src={lupa} alt="Buscar" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
