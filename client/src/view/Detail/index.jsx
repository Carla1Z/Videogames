import styles from "./Detail.module.css"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearDetail, getVideogamesId } from "../../redux/actions"
import Id from "../../components/Id";

function Detail() {
  const { id } = useParams();
//   console.log(useParams());
//   console.log(id);

const dispatch= useDispatch()
const videogameDetail= useSelector((state) => state.detail)
console.log(videogameDetail);

useEffect(() => {
  dispatch(clearDetail())
    dispatch(getVideogamesId(id))
}, [dispatch, id])
  return (
    <div className={styles.detail}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Id videogameDetail={videogameDetail} className={styles.id} />
    </div>
  );
}

export default Detail;
