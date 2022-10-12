import { Link } from "react-router-dom";
import styles from "./LadingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landingpage}>
      <h2>HenryGames</h2>
      <Link to="/home" style={{textDecoration: 'none'}}>
        <button className={styles.button}>Play!</button>
      </Link>
    </div>
  );
}

export default LandingPage;
