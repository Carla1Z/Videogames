import axios from "axios";
import {
  GENRES_FILTER,
  GET_GENRES,
  GET_ID,
  GET_NAME,
  GET_ORDER_ABC,
  GET_RATING,
  GET_VIDEOGAMES,
  SORT_ORIGIN,
} from "./type";

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
      "http://localhost:3001/videogames?name=" + name
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

export function getRating(payload) {
  return {
    type: GET_RATING,
    payload,
  };
}

export function postVideogame(payload) {
  return async function (dispatch) {
    let videogame = await axios.post("http://localhost:3001/videogames");
    return videogame;
  };
}

export function getGenres() {
  return async function (dispatch) {
    let genre = await axios("http://localhost:3001/genres", {});
    return dispatch({
      type: GET_GENRES,
      payload: genre.data,
    });
  };
}

export function filterGenres(payload) {
  return {
    type: GENRES_FILTER,
    payload,
  };
}

export function sortByOrigin(payload) {
  return {
    type: SORT_ORIGIN,
    payload,
  };
}
