const { Router } = require("express");
const { videogameId, allId, idDb } = require("../controllers/detail");
const { videogames, allVideogamesInfo } = require("../controllers/videogames");
const { Videogame, Genre } = require("../db");

const videogamesRouter = Router();

videogamesRouter.get("", async (req, res) => {
  const { name } = req.query;
  const apiInfo = await allVideogamesInfo();
  // console.log(apiInfo.length);
  console.log("Cantidad de juegos: " + apiInfo.length);

  try {
    if (name) {
      let videogameName = apiInfo
        .filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
        .slice(0, 15);

      videogameName.length
        ? res.status(200).send(videogameName)
        : res.status(404).send("Videogame not found");
    } else {
      res.status(200).send(apiInfo);
    }
    // res.send("GET de la ruta videogames");
  } catch (error) {
    console.log("Error en la ruta videogames= " + error);
  }
});

videogamesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Largo del id: " + id.length);
  // Incluir los géneros asociados
  try {
    if (id.length < 8) {
      // const apiInfo = await videogameId(id);
      // res.status(200).json(apiInfo);
      const apiInfo = await videogameId(id);
      res.status(200).send(apiInfo);
    } else {
      const dbInfo = await idDb(id);
      res.status(200).send(dbInfo);
    }

    // res.send("GET de la ruta id");
  } catch (error) {
    console.log("ID no encontrado= " + error);
  }
});

videogamesRouter.post("", async (req, res) => {
  const { name, description, released, rating, platforms, image, genres } =
    req.body;

  try {
    let newVideogame = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      image:
        image ||
        "https://images.unsplash.com/photo-1539716947714-3295e1074d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    });
    let buscarGenres = await Genre.findAll({
      where: { name: genres },
    });

    newVideogame.addGenre(buscarGenres);
    res.status(200).send("Videojuego creado!");
  } catch (error) {
    console.log("Error en la ruta POST= " + error);
  }
});

module.exports = videogamesRouter;
