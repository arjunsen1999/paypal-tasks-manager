import {
    user_signup_isLoading,
    user_signup_reset,
    user_signup_isSuccess,
    user_signup_isError,
  } from "./Auth.actionTyps";
  
  const initaialState = {
    User_isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  };
  export const userSignupReducer = (state = initaialState, { type, payload }) => {
    switch (type) {
      case user_signup_isLoading:
        return {
          ...state,
          User_isLoading: payload,
        };
  
      case user_signup_isError:
        return {
          ...state,
          isError: true,
          message: payload,
        };
  
      case user_signup_isSuccess:
        return {
          ...state,
          isSuccess: true,
          message: payload,
        };
  
      case user_signup_reset:
        return {
          ...state,
          isError: false,
          isSuccess: false,
          message: "",
        };
  
      default:
        return state;
    }
  };
  