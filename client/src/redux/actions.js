import axios from "axios";
import { GET_ORDER_ABC, GET_VIDEOGAMES } from "./type";

export function getVideogames() {
  return async (dispatch) => {
    let allVideogames = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: allVideogames.data,
    });
  };
}

export function getOrderAbc(payload) {
  return {
    type: GET_ORDER_ABC,
    payload,
  };
}
