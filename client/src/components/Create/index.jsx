import styles from "./Create.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, postVideogame } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import Validation from "./Validation";

function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.genres);
  const arrayPlatforms = useSelector((state) => state.platforms);
  const [error, setError] = useState({});

  const [create, setCreate] = useState({
    name: "",
    description: "",
    rating: "",
    released: "",
    image: "",
    genres: [],
    platforms: [],
  });

  // const arrayPlatforms = [
  //   "PC",
  //   "Nintendo Switch",
  //   "Xbox 360",
  //   "PlayStation 4",
  //   "macOS",
  //   "Linux",
  //   "Xbox One",
  //   "PlayStation 5",
  // ];

  const handleChange = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
    // console.log(create);
    setError(
      Validation({
        ...create,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelectGenres = (e) => {
    setCreate({
      ...create,
      genres: [...new Set([...create.genres, e.target.value])],
      // genres: [...create.genres, e.target.value],
    });
    console.log("Genero seleccionado: " + e.target.value);
  };

  const handleDeleteGenre = (e) => {
    setCreate({
      ...create,
      genres: create.genres.filter((el) => el !== e),
    });
  };

  const handleSelectPlatforms = (e) => {
    setCreate({
      ...create,
      platforms: [...new Set([...create.platforms, e.target.value])],
      // platforms: [...create.platforms, e.target.value],
    });
    // console.log("Plataforma seleccionada: " + e.target.value);
  };

  const handleDeletePlatform = (e) => {
    setCreate({
      ...create,
      platforms: create.platforms.filter((el) => el !== e),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(
      Validation({
        ...create,
        [e.target.value]: e.target.value,
      })
    );
    if (Object.keys(error).length === 0) {
      alert("Videojuego creado");
      console.log("handleSubmit: " + create);
      dispatch(postVideogame(create));
      setCreate({
        name: "",
        description: "",
        rating: "",
        released: "",
        image: "",
        genres: [],
        platforms: [],
      });
      history.push("/home");
    } else {
      alert("No se puedo subir el videojuego");
    }
  };

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <h3>Sube tu videojuego</h3>
        <div className={styles.formColums}>
          <div className={styles.contenedorInputs}>
            <div>
              <label>Titulo*: </label>
              <input
                type="text"
                name="name"
                value={create.name}
                onChange={(e) => handleChange(e)}
                required
              />
              {error.name && <p className={styles.error}>{error.name}</p>}
            </div>
            <div>
              <label>Descripción*: </label>
              <input
                type="text"
                name="description"
                value={create.description}
                onChange={(e) => handleChange(e)}
                required
              />
              {error.description && (
                <p className={styles.error}>{error.description}</p>
              )}
            </div>
            <div>
              <label>Fecha de lanzamiento</label>
              <input
                type="date"
                name="released"
                value={create.released}
                onChange={(e) => handleChange(e)}
                required
              />
              {error.released && (
                <p className={styles.error}>{error.released}</p>
              )}
            </div>
            <div>
              <label>Rating*:</label>
              <input
                type="text"
                name="rating"
                value={create.rating}
                onChange={(e) => handleChange(e)}
                required
              />
              {error.rating && <p className={styles.error}>{error.rating}</p>}
            </div>
            <div>
              <label>Imagen: </label>
              <input
                type="text"
                name="image"
                value={create.image}
                placeholder="URL imagen..."
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Genero: </label>
              <select onChange={(e) => handleSelectGenres(e)}>
                {genres.map((genre) => (
                  <option value={genre.name} key={genre.id}>
                    {genre.id} - {genre.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Plataforma*: </label>
              <select onChange={(e) => handleSelectPlatforms(e)}>
                {arrayPlatforms.map((platform) => (
                  <option value={platform} key={platform}>
                    {platform}
                  </option>
                ))}
              </select>
              {error.platforms && (
                <p className={styles.error}>{error.platforms}</p>
              )}
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Crear"
          onSubmit={(e) => handleSubmit(e)}
          className={styles.crear}
        />
        {/* <button type="submit"disaibled={errorButton ? true = false}>Crear</button> */}
      </form>
      <div className={styles.contenedorSelect}>
        <div className={styles.genreSelect}>
          <h4>Generos</h4>
          {create.genres.map((el) => (
            <span>
              {console.log(create.genres)}
              <button onClick={() => handleDeleteGenre(el)}>X</button>
              <p>{el}</p>
            </span>
          ))}
        </div>
        <div className={styles.platformSelect}>
          <h4>Plataformas</h4>
          {create.platforms.map((el) => (
            <span>
              <button onClick={() => handleDeletePlatform(el)}>X</button>
              <p>{el}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Create;
