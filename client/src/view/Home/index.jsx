import { Link } from "react-router-dom";
import Videogames from "../../components/Videogames";

function Home(){
    return(
        <div>
            <h2>Home</h2>
            <Link to="/form">
                <button>Formulario</button>
            </Link>
            <Videogames />
        </div>
    )
}

export default Home;