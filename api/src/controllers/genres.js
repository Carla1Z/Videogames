const { default: axios } = require("axios");
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");

let url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const genres = async () => {
  const apiInfo = await axios.get(url)
  const apiData = apiInfo.data.results.map(genre => {
    return{
      name: genre.name
    }
  })
  // console.log(apiData);
  return apiData
};

module.exports = genres;
