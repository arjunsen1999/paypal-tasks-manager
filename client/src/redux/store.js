import {
    combineReducers,
    legacy_createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
import { userLoginReducer } from "./Auth/Login/Auth.reducer";
  import { userSignupReducer } from "./Auth/UserSignUp/Auth.reducer";
  
  const rootReducer = combineReducers({
    userSignUp : userSignupReducer,
    userLogin : userLoginReducer
  });
  
  const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
  );
  