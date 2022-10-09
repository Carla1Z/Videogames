const { default: axios } = require("axios");
const { API_KEY } = process.env;

let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

const platform = async () => {
  let apiInfo = await axios.get(url);
  apiInfo = apiInfo.data.results;
  //   console.log(apiInfo);
  let apiData = apiInfo.map((el) => el.platforms[0].platform.name);
  //   console.log(apiData);
  let deleteDuplicate = [...new Set(apiData)];
  // console.log(deleteDuplicate);
  return deleteDuplicate;
};

module.exports = platform;
