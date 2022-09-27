//contiene al state
//dispatch: ejecuta una accion que actualizara el state
//subscribe: es un manejador de eventos para el state

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer.js";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);