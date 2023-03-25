import {
    user_login_isLoading,
    user_login_reset,
    user_login_isSuccess,
    user_login_isError,
    user_logout
  } from "./Auth.actionType";

  let user = JSON.parse(localStorage.getItem("userData")) || false;
  
  const initaialState = {
    user,
    User_isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    isLogoutSuccess : false
  };
  export const userLoginReducer = (state = initaialState, { type, payload }) => {
    switch (type) {
      case user_login_isLoading:
        return {
          ...state,
          User_isLoading: payload,
        };
  
      case user_login_isError:
        return {
          ...state,
          isError: true,
          message: payload,
        };
  
      case user_login_isSuccess:
        localStorage.setItem("userData", JSON.stringify(payload.user));
        return {
          ...state,
          isSuccess: true,
          message: payload.msg,
          user : payload.user
        };
  
      case user_login_reset:
        return {
          ...state,
          isError: false,
          isSuccess: false,
          message: "",
          isLogoutSuccess : false
        };

        case user_logout:
            localStorage.removeItem("userData")
            return {
                ...state,
                user : false,
                isLogoutSuccess : true,
                message : "Successfully Logout"
            }
  
      default:
        return state;
    }
  };
  