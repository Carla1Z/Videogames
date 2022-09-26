require("dotenv").config();
const { API_KEY } = process.env;
const { default: axios } = require("axios");

let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

const videogames = async () => {
  let videogamesApi = [];
  for (let i = 1; i < 6; i++) {
    let apiData = await axios.get(url);
    // console.log(apiData.data.results);
    videogamesApi = videogamesApi.concat(apiData.data.results);
    // console.log(videogamesApi);
  }

  videogamesApi = videogamesApi.map((info) => {
    return{
        id: info.id,
        name: info.name,
    }
  })
  console.log(videogamesApi.length);
};

module.exports = videogames;
