import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START, AUTH_LOGOUT } from "./types";
import axios from "axios";

export const start = (dispatch) =>
  dispatch({
    type: AUTH_START,
  });

export const success = (dispatch, { idToken, localId }) =>
  dispatch({
    type: AUTH_SUCCESS,
    id: localId,
    token: idToken,
  });

export const fail = (dispatch, errors) =>
  dispatch({
    type: AUTH_FAIL,
    errors,
  });
export const logout = (dispatch) =>
  dispatch({
    type: AUTH_LOGOUT,
  });

export const timeout = (dispatch, seconds) =>
  setTimeout(() => logout(dispatch), seconds * 1000);
const key = "AIzaSyDlqUuRRBPx47NR3u_hnTnR0asp-w9JVTo";
const signInUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
  key;
const signUpUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;
export const auth = (dispatch, method, email, password) =>
  axios
    .post(method === "signin" ? signInUrl : signUpUrl, {
      email,
      password,
      returnSecureToken: true,
    })
    .then(({ data }) => {
      localStorage.setItem("idToken", data.idToken);
      localStorage.setItem("localId", data.localId);
      success(dispatch, data);
      timeout(dispatch, +data.expiresIn);
    })
    .catch((error) => fail(dispatch, error));

export const restore = (dispatch) => {
  const idToken = localStorage.getItem("idToken");
  const localId = localStorage.getItem("localId");

  if (idToken && localId) {
    success(dispatch, { idToken, localId });
  } else {
    logout(dispatch);
  }
};
