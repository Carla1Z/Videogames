const { Router } = require("express");
const { videogameId } = require("../controllers/detail");
const { videogames, allVideogamesInfo } = require("../controllers/videogames");
const { Videogame, Genre } = require("../db");

const videogamesRouter = Router();

videogamesRouter.get("", async (req, res) => {
  const { name } = req.query;
  const apiInfo = await allVideogamesInfo();
  // console.log(apiInfo.length);
  console.log(apiInfo.length);

  try {
    if (name) {
      let videogameName = await apiInfo
        .filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
        .slice(0, 15);

      videogameName.length
        ? res.status(200).send(videogameName)
        : res.status(404).send("Videogame not found");
    } else {
      res.status(200).send(apiInfo);
    }
  } catch (error) {
    console.log("Error en la ruta videogames= " + error);
  }
  //   console.log(videogames());
  // res.send("GET de la ruta videogames");
});

videogamesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  
  // Incluir los géneros asociados
  try {
    if(id){
      const apiInfo = await videogameId(id);
      res.status(200).json(apiInfo)
    }else{
      res.send("invalid ID")
    }


    // res.send("GET de la ruta id");
  } catch (error) {
    console.log("ID no encontrado= " + error);
  }
});

videogamesRouter.post("", async (req, res) => {
  const { name, description, released, rating, platforms, genres } = req.body;
  try {
    const newVideogame = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      genres,
    });
    const genre = await Genre.findAll({
      where: { name: genres },
    });

    newVideogame.addGenre(genre);
    res.status(200).send(newVideogame);
    // res.send("POST de la ruta videogames");
  } catch (error) {
    console.log("Error en la ruta POST= " + error);
  }
});

module.exports = videogamesRouter;
