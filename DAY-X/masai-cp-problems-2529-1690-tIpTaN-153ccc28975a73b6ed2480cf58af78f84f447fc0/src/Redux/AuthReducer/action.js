import { UPDATE_AUTH_STATUS } from "./actionTypes";

export const login = (isAuth, token) => {
  return {
    type: UPDATE_AUTH_STATUS,
    payload: { isAuth, token }
  };
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
