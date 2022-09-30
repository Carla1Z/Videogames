import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideogamesId } from "../../redux/actions"
import Id from "../../components/Id";

function Detail() {
  const { id } = useParams();
//   console.log(useParams());
//   console.log(id);

const dispatch= useDispatch()
const videogameDetail= useSelector((state) => state.detail)
console.log(videogameDetail);

useEffect(() => {
    dispatch(getVideogamesId(id))
}, [dispatch, id])
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>Ruta de detalle</h1>
      <Id videogameDetail={videogameDetail} />
    </div>
  );
}

export default Detail;
