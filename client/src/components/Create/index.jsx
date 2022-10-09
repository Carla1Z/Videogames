import styles from "./Create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postVideogame } from "../../redux/actions";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Create() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  const [create, setCreate] = useState({
    name: "",
    description: "",
    released: "",
    genres: "",
    platforms: "",
  });

  const handleChange = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    console.log(`Genero seleccionado: ${e.target.value}`);
    setCreate({
      ...create,
      genres: [...create.genres, e.target.value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("http://localhost:3001/videogames", create)
    dispatch(postVideogame());
    setCreate({
      name: "",
      description: "",
      released: "",
      genres: "",
      platforms: "",
    });
    alert("Videojuego creado");
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <h3>Formulario de creación</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Titulo: </label>
          <input
            type="text"
            name="name"
            value={create.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción: </label>
          <input
            type="text"
            name="description"
            value={create.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de lanzamiento</label>
          <input
            type="date"
            name="released"
            value={create.released}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="text"
            name="rating"
            value={create.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Genero: </label>
          {/* <input
            type="text"
            name="genres"
            value={create.genres}
            onChange={handleChange}
          /> */}
          <select onChange={handleSelect}>
            {genres.map((genre) => (
              <option value={genre.name}>{genre.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Plataforma: </label>
          <input
            type="text"
            name="platforms"
            value={create.platforms}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

// Nombre
// Descripción
// Fecha de lanzamiento
// Rating
// genero
// plataforma

export default Create;
