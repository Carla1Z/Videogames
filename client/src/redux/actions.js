import axios from "axios";
import { GET_ID, GET_ORDER_ABC, GET_VIDEOGAMES } from "./type";

export function getVideogames() {
  return async (dispatch) => {
    let allVideogames = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: allVideogames.data,
    });
  };
}

export function getVideogamesId(id){
  return async (dispatch) => {
    let allVideogamesId = await axios.get('http://localhost:3001/videogames/' + id)
    return dispatch({
      type: GET_ID,
      payload: allVideogamesId.data,
    })
  }
}

export function getOrderAbc(payload) {
  return {
    type: GET_ORDER_ABC,
    payload,
  };
}
