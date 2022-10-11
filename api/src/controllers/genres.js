const { default: axios } = require("axios");
const { API_KEY } = process.env;
const { Genre } = require("../db.js");

let url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const genres = async () => {
  let apiInfo = await axios.get(url);
  let apiData = apiInfo.data.results.forEach((g) => {
    Genre.findOrCreate({
      where: { name: g.name },
    });
  });
  return apiData;
};
// apiData = apiInfo.forEach((g) => {
// return apiData;

module.exports = genres;
