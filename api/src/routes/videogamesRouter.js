const { Router } = require("express");
const { videogames, allVideogamesInfo } = require("../controllers/videogames");

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
  const apiInfo = await allVideogamesInfo();

  // Incluir los géneros asociados
  try {
    if (id) {
      let gameId = apiInfo.filter((el) => el.id == id);

      gameId.length
        ? res.status(200).send(gameId)
        : res.status(404).send("ID not found");
    } else {
      res.send("invalid ID");
    }
    // res.send("GET de la ruta id");
  } catch (error) {
    console.log("ID no encontrado= " + error);
  }
});

videogamesRouter.post("", async (req, res) => {
  res.send("POST de la ruta videogames");
});

module.exports = videogamesRouter;
