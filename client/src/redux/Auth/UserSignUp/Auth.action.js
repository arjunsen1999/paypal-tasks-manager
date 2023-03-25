import axios from "axios";
import {
  user_signup_isLoading,
  user_signup_isSuccess,
  user_signup_isError,
} from "./Auth.actionTyps";

export const userSignup = (user_signup_data) => async (dispatch) => {
  dispatch({ type: user_signup_isLoading, payload: true });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/register`,
      user_signup_data
    );
    dispatch({ type: user_signup_isLoading, payload: false });
    dispatch({ type: user_signup_isSuccess, payload: data.msg });
  } catch (error) {
    console.log(error)
    dispatch({ type: user_signup_isLoading, payload: false });
    dispatch({ type: user_signup_isError, payload: error.response.data.error });
  }
};
