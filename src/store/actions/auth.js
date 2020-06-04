import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START } from "./types";
import axios from "axios";

export const start = (dispatch) =>
  dispatch({
    type: AUTH_START,
  });

export const success = (dispatch, data) =>
  dispatch({
    type: AUTH_SUCCESS,
    data,
  });

export const fail = (dispatch, errors) =>
  dispatch({
    type: AUTH_FAIL,
    errors,
  });

export const auth = (dispatch, email, password) =>
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDlqUuRRBPx47NR3u_hnTnR0asp-w9JVTo",
      { email, password }
    )
    .then(({ data }) => success(dispatch, data))
    .catch((error) => fail(dispatch, error));
