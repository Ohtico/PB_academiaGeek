import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../action/ActionLogin";
import Cookies from "universal-cookie";

export const Navbar = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };
  const cookies = new Cookies();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#D73F13" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Git Repositories
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Administrador: {cookies.get('nombreUsuario')}
          &nbsp;
          
         
          Correo:  &nbsp;{cookies.get('emailUsuario')}

          
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
