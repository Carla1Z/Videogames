import styles from "./Id.module.css";

function Id({ videogameDetail }) {
  return (
    <div className={styles.container}>
      {videogameDetail ? (
          <div className={styles.subcontainer}>
            <figure className={styles.detail}>
              <img src={videogameDetail.image} alt="videojuego" />
              <ul>
                <li>
                  <b>Rating:</b>
                  <p>{videogameDetail.rating}</p>
                </li>
                <li>
                  <b>Generos:</b>
                  <p>{!videogameDetail.originDb ? videogameDetail.genres : videogameDetail.genres.map(el => el.name).toString()}</p>
                </li>
                <li>
                  <b>Plataforma:</b>
                  <p>{videogameDetail.platforms}</p>
                </li>
                <li>
                  <b>Fecha de lanzamiento:</b>
                  <p>{videogameDetail.released}</p>
                </li>
              </ul>
            </figure>
            <div className={styles.description}>
              <h3>{videogameDetail.name}</h3>
              <p>{videogameDetail.description}</p>
          </div>
        </div>
      ) : (
        <p>No existe el videojuego</p>
      )}
    </div>
  );
}

// [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
// [ ] Descripción
// [ ] Fecha de lanzamiento
// [ ] Rating
// [ ] Plataformas

export default Id;
