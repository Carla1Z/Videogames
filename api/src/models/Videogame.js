const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    platforms: {
      // type: DataTypes.STRING,
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    originDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};

// ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// Nombre *
// Descripción * !!!!
// Fecha de lanzamiento
// Rating
// Plataformas *
