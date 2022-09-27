import styles from "./Nav.module.css";
import SearchBar from "../SearchBar";

function Nav(){
    return(
        <div className={styles.nav}>
            <SearchBar className={styles.searchbar} />
        </div>
    )
}

export default Nav;