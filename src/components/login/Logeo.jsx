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
      <div id="login">
        <Paper>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h1>Iniciar Sesión</h1>
            <TextField
              id="outlined-name"
              name="email"
              type="email"
              value={email}
              onChange={handleInputChange}
              label="Email"
            />
            <TextField
              id="outlined-uncontrolled"
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              label="Contraseña"
            />
            <span id="regi">
            No tienes Cuenta? &nbsp;
            <Link id="textD" to="/registro">
              Registrate{" "}
            </Link>
          </span>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            id="grupob"
          >
            <Button onClick={handleFacebook}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="facebook"
                width="32"
              />
              Facebook
            </Button>
            <Button type="submit">Iniciar sesión</Button>
            <Button onClick={loginGooglee}>
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                alt="facebook"
                width="32"
              />
              Google
            </Button>
          </ButtonGroup>
          </Box>
          
        </Paper>
      </div>
    </>
  );
};
