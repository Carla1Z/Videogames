import { Link } from "react-router-dom";
import Create from "../../components/Create";
import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.form}>
      <h2>Vista del formulario de creación</h2>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <Create />
    </div>
  );
}

export default Form;
