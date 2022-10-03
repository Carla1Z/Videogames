const { Router } = require("express");
const genres = require("../controllers/genres");
const { Videogame, Genre } = require("../db");

const genresRouter = Router();

genresRouter.get("", async (req, res) => {
  try {
    let genresApi = await genres();

    console.log(typeof genresApi);

    genresApi.forEach((element) => {
      Genre.findOrCreate({
        where: { name: element },
      });
    });

    let genresDb = await Genre.findAll();
    res.send(genresDb);
  } catch (error) {
    console.log("Error en la ruta genre= " + error);
  }
});

module.exports = genresRouter;
