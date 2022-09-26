const { Router } = require("express");

const genresRouter = Router();

genresRouter.get('', async(req, res) => {
    res.send('GET de la ruta genre')
})

module.exports = genresRouter;
