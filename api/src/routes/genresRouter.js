const { Router } = require("express");
const { Videogame, Genre } = require("../db");

const genresRouter = Router();

genresRouter.get("", async (req, res) => {
  // let apiData = await genres();
  try {
    let dbGenres = await Genre.findAll();
    res.status(200).send(dbGenres)
  } catch (error) {
    console.log("Error en la ruta genre= " + error);
  }
});

module.exports = genresRouter;
