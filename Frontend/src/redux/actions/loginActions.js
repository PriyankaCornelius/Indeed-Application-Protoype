import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_RESUME,
} from "../constants/ActionTypes";
import { commonLogin } from "../../controllers/login";

export const commonLoginFunc = (payload, setLoginError) => (dispatch) => {
  commonLogin(payload)
    .then((res) => {
      console.log(res.data);
      if (res.data[0] === "Invalid Credentials") {
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: {},
        });
        setLoginError("Invalid email/password. Please try again");
      } else {
        dispatch({
          type: LOGIN_USER,
          payload: res.data,
        });
        if (res.data[0][0].personaType === "js") window.location.href = "/";
        if (res.data[0][0].personaType === "a")
          window.location.href = "/admin/dashboard";
        if (res.data[0][0].personaType === "e")
          window.location.href = "/employerHeader";
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {},
      });
      setLoginError("Something went wrong. Please try again");
    });
};

export const commonLogoutFunc = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  window.location.href = "/login";
};

export const updateResume = (payload) => (dispatch) => {
  dispatch({
    type: UPDATE_RESUME,
    payload: payload,
  });
};
