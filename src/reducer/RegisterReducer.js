import { types } from "../type/types";

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.register:
      return {
        IDuser: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
      };

    default:
      return state;
  }
};
