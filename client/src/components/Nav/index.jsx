import styles from "./Nav.module.css";
import SearchBar from "../SearchBar";

function Nav({ setCurrentPage }) {
  return (
    <div className={styles.nav}>
      <SearchBar setCurrentPage={setCurrentPage} className={styles.searchbar} />
    </div>
  );
}

export default Nav;
