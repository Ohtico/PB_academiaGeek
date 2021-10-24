import { types } from "../type/types";
import { db } from "../config/FirebaseConfig";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { CargarCandidato } from "../helpers/CargarCandidato";

export const CandidatoNew = (candidato) => {
  return async (dispatch, getSate) => {
    const gmail = getSate().login.user.email;
    const newCandidato = {
      nombre: candidato.nombre,
      apellido: candidato.apellido,
      cedula: candidato.cedula,
      fechaN: candidato.fechaN,
      correo: candidato.correo,
      usuario: candidato.usuario,
    };
    await addDoc(collection(db, `${gmail}/candidatos/data`), newCandidato);
    dispatch(addNewCandidato(newCandidato));
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: `Se El Candidato`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
};

export const DeleteCand = (id) => {
  return async (dispatch, getSate) => {
    const gmail = getSate().login.user.email;
    await deleteDoc(doc(db, `${gmail}/candidatos/data`, `${id}`));

    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: `Se Elimino El Candidato`,
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(Mostrar(gmail));
    dispatch(deleteCand(id));
  };
};
export const deleteCand = (id) => ({
  type: types.candidatoDelete,
  payload: id,
});

export const addNewCandidato = (candidato) => ({
  type: types.CandidatoAddNew,
  payload: {
    ...candidato,
  },
});

export const Mostrar = (gmail) => {
  return async (dispatch) => {
    const candidatoDb = await CargarCandidato(gmail);
    dispatch(setCandidato(candidatoDb));
    dispatch(activeCandidato(candidatoDb));
  };
};
export const setCandidato = (candidatoDb) => ({
  type: types.candidatoLoad,
  payload: candidatoDb,
});

export const activeCandidato = (candidatoDb) => {
  return {
    type: types.candidatoActive,
    payload: candidatoDb,
  };
};
export const watchCandidato = (candidatoDb) => {
  return {
    type: types.candidatoWatch,
    payload: candidatoDb,
  };
};
export const editCand = (candidato) => {
  return async (dispatch, getSate) => {
    const gmail = getSate().login.user.email;

    const Editar = {
      nombre: candidato.nombre,
      apellido: candidato.apellido,
      cedula: candidato.cedula,
      fechaN: candidato.fechaN,
      correo: candidato.correo,
      usuario: candidato.usuario,
    };
    const tareaFib = { ...Editar };
    delete tareaFib.id;

    Swal.fire({
      title: "Guardando Cambios...",
      showConfirmButton: false,
      allowOutsideClick: false,
    });
    const dosRef = await doc(db, `${gmail}/candidatos/data`, `${candidato.id}`);
    const update = await updateDoc(dosRef, Editar);
    Swal.fire("Guardado", candidato.titulo, "success");
    dispatch(Mostrar(gmail));
  };
};
