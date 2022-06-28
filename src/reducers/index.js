import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import responseReducer from "./responseReducer";
import cardFiltersReducer from './cardFiltersReducer'



const rootReducer = combineReducers({
  response: responseReducer,
  filters: cardFiltersReducer
});



export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);