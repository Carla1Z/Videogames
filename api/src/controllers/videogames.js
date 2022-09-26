require("dotenv").config();
const { API_KEY } = process.env;
const { default: axios } = require("axios");

let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

const videogames = async () => {
  let videogamesApi = [];
  for (let i = 1; i < 6; i++) {
    let apiData = await axios.get(url + `&page=${i}`);
    // console.log(apiData.data.results);
    
    apiData.data.results.map(game => {
      videogamesApi.push({
        id: game.id,
        name: game.name,
        image: game.background_image,
        rating: game.rating,
        genres: game.genres.map(genre => genre.name),
        // platforms: game.platforms[0].platform.name,
        // released: game.released,
        // description: game.description,
      })
    })
  }
  return videogamesApi;
};

module.exports = videogames;
