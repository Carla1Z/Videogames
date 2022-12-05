import axios from "axios";
import {
  CLEAR_DETAIL,
  GENRES_FILTER,
  GET_GENRES,
  GET_ID,
  GET_NAME,
  GET_ORDER_ABC,
  GET_PLATFORMS,
  GET_RATING,
  GET_VIDEOGAMES,
  POST_VIDEOGAME,
  SORT_ORIGIN,
} from "./type";

export function getVideogames() {
  return async (dispatch) => {
    try {
      let allVideogames = await axios.get("/videogames");
      return dispatch({
        type: GET_VIDEOGAMES,
        payload: allVideogames.data,
      });
    } catch (error) {
      console.log("Error en la action GET_VIDEOGAMES: " + error);
    }
  };
}

export function getName(name) {
  return async (dispatch) => {
    let videogameName = await axios.get(
      "/videogames?name=" + name
    );
    return dispatch({
      type: GET_NAME,
      payload: videogameName.data,
    });
  };
}

export function getVideogamesId(id) {
  return async (dispatch) => {
    try {
      let videogameId = await axios.get(
        "/videogames/" + id
      );
      return dispatch({
        type: GET_ID,
        payload: videogameId.data,
      });
    } catch (error) {
      console.log("Error en la action GET_ID: " + error);
    }
  };
}

export function clearDetail() {
  return {
    type: CLEAR_DETAIL,
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
    let videogame = await axios.post(
      "/videogames",
      payload
    );
    console.log(videogame);
    return videogame;
  };
}

export function getPlatforms() {
  return async function (dispatch) {
    let platforms = await axios("/platforms");
    return dispatch({
      type: GET_PLATFORMS,
      payload: platforms.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    let genre = await axios("/genres");
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
