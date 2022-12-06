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

const initialState = {
  videogames: [],
  totalVideogames: [],
  detail: [],
  genres: [],
  platforms: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        totalVideogames: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: {},
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_ORDER_ABC:
      let sortVideogames = [...state.videogames];

      sortVideogames =
        action.payload === "asc"
          ? state.videogames.sort(function (a, z) {
              if (a.name > z.name) return 1;
              if (a.name < z.name) return -1;
              return 0;
            })
          : state.videogames.sort(function (a, z) {
              if (a.name < z.name) return 1;
              if (a.name > z.name) return -1;
              return 0;
            });
      return {
        ...state,
        videogames: sortVideogames,
      };
    case GET_RATING:
      let getRating =
        action.payload === "max"
          ? state.totalVideogames.sort(function (a, b) {
              if (a.rating - b.rating < 0) return 1;
              if (a.rating - b.rating > 0) return -1;
              return 0;
            })
          : state.totalVideogames.sort(function (a, b) {
              if (a.rating - b.rating > 0) return 1;
              if (a.rating - b.rating < 0) return -1;
              return 0;
            });
      return {
        ...state,
        videogames: getRating,
      };
    case SORT_ORIGIN:
      let videogamesOrigin = state.totalVideogames;
      let sortOrigin =
        action.payload === "all"
          ? videogamesOrigin
          : action.payload === "db"
          ? videogamesOrigin.filter((e) => e.originDb)
          : videogamesOrigin.filter((e) => !e.originDb);
      return {
        ...state,
        videogames: sortOrigin,
      };
    case GENRES_FILTER:
      let allVideogames = state.totalVideogames;
      // let allVideogames = state.videogames;
      let filter =
        action.payload === "genres"
          ? allVideogames
          : allVideogames.filter((g) => {
              return g.genres.includes(action.payload);
            });
      return {
        ...state,
        videogames: filter,
      };

    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case POST_VIDEOGAME:
      return {
        ...state,
      };
    default:
      return state;
  }
}
