import { types } from "../type/types";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        user: action.payload.user,
      };
    default:
      return state;
  }
};