const { Router } = require("express");
const videogames = require("../controllers/videogames");

const videogamesRouter = Router();

videogamesRouter.get("", async (req, res) => {
    console.log(videogames());
  res.send("GET de la ruta videogames");
});

videogamesRouter.get("/:id", async (req, res) => {
  res.send("GET de la ruta id");
});

videogamesRouter.post('', async(req, res) => {
    res.send("POST de la ruta videogames")
})

module.exports = videogamesRouter;
