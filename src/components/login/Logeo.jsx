import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginEmailPassword,
  loginFacebook,
  loginGoogle,
} from "../../action/ActionLogin";
import { useForm } from "../../hook/useForm";

export const Logeo = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
    // console.log("hola");
  };

  const loginGooglee = () => {
    dispatch(loginGoogle());
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
  };
  return (
    <>
      <div className="container mt-5  text-white">
        <div className="container p-5">
          <form onSubmit={handleSubmit} className="row g-2 caja p-2">
            <h3 className="d-flex justify-content-center ">Iniciar Sesión</h3>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-3 text-center">
              <span>
                No Tienes cuenta?{" "}
                <Link
                  id="textD"
                  className="hover-underline-animation"
                  to="/registro"
                >
                  {" "}
                  <strong> Registrate</strong>
                </Link>{" "}
              </span>
            </div>
            <div className="d-flex justify-content-center my-3 ">
              <button onClick={handleFacebook} className="btn btn-outlined-info text-white m-2 ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="facebook"
                width="32"
              />Facebook
              </button>
              <button type="submit" className="btn btn-info m-2 ">
                Iniciar Sesión
              </button>
              <button onClick={loginGooglee} className="btn btn-outlined-danger text-white m-2">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                alt="facebook"
                width="32"
              />Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
