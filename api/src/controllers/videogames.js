require("dotenv").config();
const { API_KEY } = process.env;
const { default: axios } = require("axios");

let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

const videogames = async () => {
  let videogamesApi = [];
  for (let i = 0; i < 5; i++) {
    let apiData = await axios.get(url);

    videogamesApi = videogamesApi.concat(apiData.data.results);

    videogamesApi = videogamesApi.map((game) => {
      return {
        id: game.id,
        name: game.name,
      };
    });
    url = apiData.data.next;
    // console.log(url);
    // console.log(videogamesApi);
    // console.log(videogamesApi.length);
  }
  return videogamesApi;
};


module.exports = videogames;
