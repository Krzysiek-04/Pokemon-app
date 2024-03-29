import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counter from "../redux/ducks/counter";
import stopwatch from "../redux/ducks/stopwatch";
import registration from "../redux/ducks/registration";
import snackbar from "../redux/ducks/snackbar";
import characterList from "../redux/ducks/characterList";

const reducers = combineReducers({
  counter,
  stopwatch,
  registration,
  snackbar,
  characterList,
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
