require("dotenv").config();
const { API_KEY } = process.env;
const { default: axios } = require("axios");

let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

const videogames = async () => {
  let videogamesApi = [];
  for (let i = 0; i < 5; i++) {
    let apiData = await axios.get(url);

    url = apiData.data.next;
    // console.log(url);
    videogamesApi = videogamesApi.concat(apiData.data.results);
    // console.log(videogamesApi);

    videogamesApi = videogamesApi.map((game) => {
      return {
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        // genres: game.genres.map((r) => r.map),
      };
    });
    // console.log(url);
    // console.log(videogamesApi);
    // console.log(videogamesApi.length);
  }
  return videogamesApi;
};

module.exports = videogames;
