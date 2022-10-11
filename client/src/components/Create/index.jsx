import styles from "./Create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, postVideogame } from "../../redux/actions";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Create() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  console.log(genres);

  const [create, setCreate] = useState({
    name: "",
    description: "",
    rating: "",
    released: "",
    genres: [],
    platforms: [],
  });

  const handleChange = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
    console.log(create);
  };

  const handleSelectGenres = (e) => {
    setCreate({
      ...create,
      genres: [...new Set([...create.genres, e.target.value])],
    });
    console.log("Genero seleccionado: " + e.target.value);
  };

  const handleSelectPlatforms = (e) => {
    setCreate({
      ...create,
      platforms: [...new Set([...create.platforms, e.target.value])],
    });
    console.log("Plataforma seleccionada: " + e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit: " + create);
    dispatch(postVideogame(create));
    alert("Videojuego creado");
    setCreate({
      name: "",
      description: "",
      rating: "",
      released: "",
      genres: [],
      platforms: [],
    });
  };

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <h3>Formulario de creación</h3>
        <div>
          <label>Titulo: </label>
          <input
            type="text"
            name="name"
            value={create.name}
            onChange={(e) =>handleChange(e)}
          />
        </div>
        <div>
          <label>Descripción: </label>
          <input
            type="text"
            name="description"
            value={create.description}
            onChange={(e) =>handleChange(e)}
          />
        </div>
        <div>
          <label>Fecha de lanzamiento</label>
          <input
            type="date"
            name="released"
            value={create.released}
            onChange={(e) =>handleChange(e)}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="text"
            name="rating"
            value={create.rating}
            onChange={(e) =>handleChange(e)}
          />
        </div>
        <div>
          <label>Genero: </label>
          <select onChange={(e) =>handleSelectGenres(e)}>
            {genres.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          
          <select onChange={handleSelectPlatforms}>
            {platforms.map((platform) => {
              return (
                <option value={platform} key={platform}>
                  {platform}
                </option>
              );
            })}
          </select>
         
        </div>

        <input type="submit" value="Crear" />
        {/* <button type="submit"disaibled={errorButton ? true = false}>Crear</button> */}
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
