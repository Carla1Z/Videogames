const Validation = (create) => {
  let error = {};

  if (!create.name) error.name = "*El titulo es requerido";
  if (!create.description) error.description = "*Agrega una descripción";
  if (!create.rating || create.rating < 0 || create.rating > 5)
    error.rating = "*El rating debe tener un valor entre 0 y 5";
  if (!create.platforms.length)
    error.platforms = "*La plataforma es requerida";

  return error;
};

export default Validation;
