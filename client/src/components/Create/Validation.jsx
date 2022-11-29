const Validation = (create) => {
  let error = {};

  if (!create.name) {
    error.name = "*El título es requerido";
  } else if (create.name.length < 4) {
    error.name = "*El título del juego debe tener al menos 4 caracteres";
  }

  if (!create.description) {
    error.description = "*Agrega una descripción";
  } else if (create.description.length <= 8) {
    error.description = "*La descripción debe tener más de 8 caracteres";
  }

  if (!create.rating) {
    error.rating = "*Ingresa un valor";
  } else if (!/^[1-5]$/.test(create.rating)) {
    error.rating = "*El rating debe tener un valor entre 0 y 5";
  }

  if(!create.released){
    error.released = "*Ingresa una fecha"
  }
  return error;
};

export default Validation;
