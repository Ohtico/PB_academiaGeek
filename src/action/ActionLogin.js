import { types } from "../type/types";
import axios from "axios";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { google, facebook, db } from "../config/FirebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log("Correo", user);
        dispatch(loginSincrono(user));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        //   const { uid, displayName, photoURL, email } = user;
        console.log(user);
        dispatch(loginSincrono(user));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        // const { uid, displayName, photoURL, email } = user;
        dispatch(loginSincrono(user));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// handleLogout

export const logout = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then((user) => {
        dispatch(logoutSincrono());
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: `Vuelve pronto`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const LoginAuth = () => {
  return (dispatch) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      dispatch(loginSincrono(user));
    });
  };
};

export const loginSincrono = (user) => {
  return {
    type: types.login,
    payload: { user },
  };
};

export const logoutSincrono = () => {
  return {
    type: types.logout,
  };
};
