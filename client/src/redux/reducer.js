import { GET_VIDEOGAMES } from "./type";

const initialState = {
  videogames: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    default:
      return state;
  }
}
