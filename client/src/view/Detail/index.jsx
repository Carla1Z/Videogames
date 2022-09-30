import { Link } from "react-router-dom";

function Detail(){
    return(
        <div>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <h1>Ruta de detalle</h1>
        </div>
    )
}


export default Detail;