function Create() {
  return (
    <div>
      <h3>Formulario de creación</h3>
      <form>
        <div>
          <label>Titulo: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Descripción: </label>
          <input type="text" name="description" />
        </div>
        <div>
          <label>Fecha de lanzamiento</label>
          <input type="date" name="released" />
        </div>
        <div>
          <label>Rating</label>
          <input type="text" name="rating" />
        </div>
        <div>
          <label>Genero: </label>
          <input type="text" name="genres" />
        </div>
        <div>
          <label>Plataforma: </label>
          <input type="text" name="platforms" />
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
