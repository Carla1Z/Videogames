import { GET_ID, GET_ORDER_ABC, GET_VIDEOGAMES } from "./type";

const initialState = {
  videogames: [],
  totalVideogames: [],
  detail: [],
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
    default:
      return state;
  }
}
