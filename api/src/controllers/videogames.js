require("dotenv").config();
const { default: axios } = require("axios");
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");


const videogames = async () => {
  let url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  let videogamesApi = [];
  for (let i = 1; i < 6; i++) {
  // let apiData = await axios.get(url + `&page=${i}`);
  let apiData = await axios.get(url);

    apiData.data.results.map((game) => {
      videogamesApi.push({
        id: game.id,
        name: game.name,
        image: game.background_image,
        rating: game.rating,
        genres: game.genres.map((genre) => genre.name).toString(),
        platforms: game.platforms[0].platform.name,
        released: game.released,
      });
    });
    url = apiData.data.next
  }
  return videogamesApi;
};

const dbVideogames = async () => {
  let dbGame = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return dbGame;
};

const allVideogamesInfo = async () => {
  const apiInfo = await videogames();
  const dbInfo = await dbVideogames();
  const infoTotal = apiInfo.concat(dbInfo);

  return infoTotal;
};

module.exports = {
  videogames,
  dbVideogames,
  allVideogamesInfo,
};
