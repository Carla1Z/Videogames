import styles from "./Id.module.css";

function Id({ videogameDetail }) {
  return (
    <div>
      {videogameDetail.length ? (
        <div className={styles.detail}>
          <h3>{videogameDetail[0].name}</h3>
          <p>{videogameDetail[0].rating}</p>
          <p>{videogameDetail[0].genres}</p>
          <img src={videogameDetail[0].image} alt="videojuego" />
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
