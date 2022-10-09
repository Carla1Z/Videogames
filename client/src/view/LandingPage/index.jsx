import { Link } from "react-router-dom";
import styles from "./LadingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landingpage}>
      <h2>LandingPage</h2>
      <Link to="/home">
        <button>Go!</button>
      </Link>
    </div>
  );
}

export default LandingPage;
