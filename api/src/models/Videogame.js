const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
      // type: DataTypes.DATEONLY,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    originDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};

// ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// Nombre *
// Descripción * !!!!
// Fecha de lanzamiento
// Rating
// Plataformas *
