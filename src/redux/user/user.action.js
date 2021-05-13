import { UserActionTypes } from "./user.types";

export const setCurrentUser = (state) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: state,
});
