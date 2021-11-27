import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "../constants/ActionTypes";
import { commonLogin } from "../../controllers/login";

export const commonLoginFunc = (payload) => (dispatch) => {
  commonLogin(payload)
    .then((res) => {
      console.log(res.data);
      if (res.data[0] === "Invalid Credentials") {
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: {},
        });
      } else {
        dispatch({
          type: LOGIN_USER,
          payload: res.data,
        });
        window.location.href = "/";
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {},
      });
    });
};

export const commonLogoutFunc = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  window.location.href = "/login";
};
