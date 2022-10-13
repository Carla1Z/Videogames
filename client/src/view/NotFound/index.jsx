import { Link } from "react-router-dom"
import johntravolta from "../../assets/john-travolta.gif"
import styles from "./NotFound.module.css"

function NotFound() {
  return (
    <div className={styles.notfound}>
        <div className={styles.msg}>
        <h1>Error 404</h1>
        <h3>John Travolta is lost your page</h3>
        <Link to="/home">
            <button>Ir a home</button>
        </Link>
        </div>
        <img src={johntravolta} alt="Error 404. Page not found" />
        </div>
  )
}

export default NotFound