require("dotenv").config();
const { API_KEY } = process.env;
const { default: axios } = require("axios");
const { Videogame, Genre } = require("../db");

const videogameId = async (id) => {
  let url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;

  let info = await axios.get(url);

  const apiData = {
    id: info.data.id,
    name: info.data.name,
    image: info.data.background_image,
    rating: info.data.rating,
    genres: info.data.genres.map((genre) => genre.name).toString(),
    platforms: info.data.platforms[0].platform.name,
    released: info.data.released,
    description: info.data.description_raw,
  };
  return apiData;
  //   console.log(apiData);
};

const idDb = async (id) => {
  return await Videogame.findByPk(id, {
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

// const allId = Object.assign(videogameId, idDb)
// const allId = { ...videogameId, ...idDb };

const allId = async () => {
  const apiInfo = await videogameId();
  const dbInfo = await idDb();
  const infoTotal = { ...apiInfo, ...dbInfo };

  return infoTotal;
};

module.exports = {
  videogameId,
  idDb,
  allId,
};
