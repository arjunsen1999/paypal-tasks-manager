import axios from "axios";
import {
  user_login_isLoading,
  user_login_isSuccess,
  user_login_isError,
} from "./Auth.actionType";

export const userLogin = (user_login_data) => async (dispatch) => {
  dispatch({ type: user_login_isLoading, payload: true });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
      user_login_data
    );
    dispatch({ type: user_login_isLoading, payload: false });
 
    dispatch({
      type: user_login_isSuccess,
      payload: { msg: data.msg, user: data.user },
    });
  } catch (error) {
      console.log(error)
    dispatch({ type: user_login_isLoading, payload: false });
    dispatch({ type: user_login_isError, payload: error.response.data.error });
  }
};
