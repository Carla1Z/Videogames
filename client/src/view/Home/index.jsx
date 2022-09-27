import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Videogames from "../../components/Videogames";
import Nav from "../../components/Nav";

function Home(){
    return(
        <div>
            <Nav />
            <div className={styles.home}>
                
            <Link to="/form">
                <button className={styles.button}>Formulario</button>
            </Link>
            <Videogames />
            </div>
        </div>
    )
}

export default Home;