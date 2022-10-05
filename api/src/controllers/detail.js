require("dotenv").config();
const { API_KEY } = process.env;
const { default: axios } = require("axios");

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
  };
  return apiData;
  //   console.log(apiData);
};

module.exports = {
  videogameId,
};
