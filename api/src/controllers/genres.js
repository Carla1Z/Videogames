const { default: axios } = require("axios");
const { API_KEY } = process.env;

let url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const genres = async () => {
  let apiInfo = await axios.get(url);
  //   console.log(apiInfo.data.results);
  apiInfo = apiInfo.data.results;

//   let apiData = apiInfo.map((g) => g.name).toString();
  let apiData = apiInfo.map((g) => g.name)
  // console.log(apiData);
  return apiData;
};

module.exports = genres;
