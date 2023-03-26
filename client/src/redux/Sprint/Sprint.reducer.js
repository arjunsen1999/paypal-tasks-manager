import {
  sprint_reset,
  isError,
  isSuccess,
  loading_button,
  trigger_loader,
} from "./Sprint.actionType";

const initialState = {
  isLoading_button: false,
  loader: true,
  isSuccess: false,
  isError: false,
  message: "",
};

export const sprintReducer = (state = initialState, { type, payload }) => {
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

      case sprint_reset:
        return {
            ...state,
            isSuccess : false,
            isError: false,
            message: "",
            isLoading_button : false
        }

    default:
      return state;
  }
};
