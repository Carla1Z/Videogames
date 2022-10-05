import {
  GET_GENRES,
  GET_ID,
  GET_NAME,
  GET_ORDER_ABC,
  GET_RATING,
  GET_VIDEOGAMES,
} from "./type";

const initialState = {
  videogames: [],
  totalVideogames: [],
  detail: [],
  genres: [],
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
            })
          : state.totalVideogames.sort(function (a, b) {
              if (a.rating - b.rating > 0) return 1;
              if (a.rating - b.rating < 0) return -1;
            });
      return {
        ...state,
        videogames: getRating,
      };
    case GET_GENRES:
      // let allVideogames = state.totalVideogames;
      // let filter =
      //   action.payload === "genres"
      //     ? allVideogames
      //     : allVideogames.filter((g) => {
      //         return g.genres.includes(action.payload);
      //       });
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
}
