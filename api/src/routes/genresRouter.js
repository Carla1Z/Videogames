const { Router } = require("express");
const genres = require("../controllers/genres");
const { Videogame, Genre } = require("../db");

const genresRouter = Router();

genresRouter.get("", async (req, res) => {
  const genresApi = await genres()
  const genresDB = await Genre.findAll()
  try {
    if(genresDB.length === 0){
      const create = await Genre.bulkCreate(genresApi)
      res.status(200).send(create)
    }else{
      res.status(200).send(genresDB)
    }
    // res.send("GET ruta genres")
  } catch (error) {
    console.log("Error en la ruta genre= " + error);
  }
});

module.exports = genresRouter;
