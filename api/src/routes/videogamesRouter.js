const { Router } = require("express");
const videogames = require("../controllers/videogames");


const videogamesRouter = Router();

videogamesRouter.get("", async (req, res) => {
  const { name } = req.query
  const apiInfo = await videogames()
  // console.log(apiInfo.length);

  try {
    if(name){
      const videogameName = await apiInfo.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))

      videogameName.length ? res.status(200).send(videogameName) : res.status(404).send("Videogame not found")
    }else{
      res.status(200).send(apiInfo)
    }
  } catch (error) {
    console.log("Error en la ruta videogames= " + error);
  }
  //   console.log(videogames());
  // res.send("GET de la ruta videogames");
});

videogamesRouter.get("/:id", async (req, res) => {
  res.send("GET de la ruta id");
});

videogamesRouter.post('', async(req, res) => {
    res.send("POST de la ruta videogames")
})

module.exports = videogamesRouter;
