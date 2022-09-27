import { Link } from "react-router-dom";
import Create from "../../components/Create";

function Form(){
    return(
        <div>
            <h2>Vista del formulario de creación</h2>
            <Link to="/home">
                <button>Volver</button>
            </Link>
            <Create />
        </div>
    )
}

export default Form;