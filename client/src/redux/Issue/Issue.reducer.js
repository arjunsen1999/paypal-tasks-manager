import {
    issue_reset,
    isError,
    isSuccess,
    loading_button,
    trigger_loader,
  } from "./Issue.actionType";
  
  const initialState = {
    isLoading_button: false,
    loader: true,
    isSuccess: false,
    isError: true,
    message: "",
  };
  
  export const issueReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case loading_button:
        return {
          ...state,
          isLoading_button: payload,
        };
  
      case trigger_loader:
        return {
          ...state,
          loader: !state.loader,
        };
  
      case isError:
        return {
          ...state,
          isError: true,
          message: payload,
        };
  
      case isSuccess:
        return {
          ...state,
          isSuccess: true,
          message: payload,
        };
  
        case issue_reset:
          return {
              ...state,
              isSuccess : false,
              isError: true,
              message: "",
          }
  
      default:
        return state;
    }
  };
  