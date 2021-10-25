import { types } from "../type/types";

const initialState = {
  candidatos: [],
  EditCan: {
    nombre: "",
    apellido: "",
    cedula: "",
    fechaN: "",
    correo: "",
    usuario: "",
  },
  WatchCan: {
    nombre: "",
    apellido: "",
    cedula: "",
    fechaN: "",
    correo: "",
    usuario: "",
  },
};

export const CandidatoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CandidatoAddNew:
      return {
        ...state,
        candidatos: [action.payload, ...state.candidatos],
      };

    case types.candidatoLoad:
      return {
        ...state,
        candidatos: [...action.payload],
      };
    case types.candidatoDelete:
      return {
        ...state,
      };
    case types.candidatoActive:
      return {
        ...state,
        EditCan: action.payload,
      };
    case types.candidatoWatch:
      return {
        ...state,
        WatchCan: action.payload,
      };
    default:
      return state;
  }
};
