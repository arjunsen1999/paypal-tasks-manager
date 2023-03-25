import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from "./Auth/Login/Auth.reducer";
import { userSignupReducer } from "./Auth/UserSignUp/Auth.reducer";
import { sprintReducer } from "./Sprint/Sprint.reducer";
import { issueReducer } from "./Issue/Issue.reducer";

const rootReducer = combineReducers({
  userSignUp: userSignupReducer,
  userLogin: userLoginReducer,
  sprint: sprintReducer,
  issue : issueReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
