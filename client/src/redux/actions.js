import axios from "axios";
import { GET_ID, GET_NAME, GET_ORDER_ABC, GET_VIDEOGAMES } from "./type";

export function getVideogames() {
  return async (dispatch) => {
    let allVideogames = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: allVideogames.data,
    });
  };
}

export function getName(name) {
  return async (dispatch) => {
    let videogameName = await axios.get(
      "http://localhost:3001/videogames?name" + name
    );
    return dispatch({
      type: GET_NAME,
      payload: videogameName.data,
    });
  };
}

export function getVideogamesId(id) {
  return async (dispatch) => {
    let videogameId = await axios.get("http://localhost:3001/videogames/" + id);
    return dispatch({
      type: GET_ID,
      payload: videogameId.data,
    });
  };
}

export function getOrderAbc(payload) {
  return {
    type: GET_ORDER_ABC,
    payload,
  };
}
