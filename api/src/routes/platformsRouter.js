const { Router } = require("express");
const platform = require("../controllers/platforms");

const platformsRouter = Router();

platformsRouter.get("", async (req, res) => {
  try {
    // console.log(platform());
    const platformsApi = await platform();
    res.send(platformsApi);
  } catch (error) {
    console.log("Error en la ruta platforms= " + error);
  }
});

module.exports = platformsRouter;
