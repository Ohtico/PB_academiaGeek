import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { Register } from "../components/register/Register";
import { Logeo } from "../components/login/Logeo";
import { LoginAuth } from "../action/ActionLogin";
import { Mostrar } from "../action/ActionCandidato";

export default function AppRouter() {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        // dispatch(loginEmailPassword(user.uid, user.displayName));
        dispatch(Mostrar(user.email));
        dispatch(LoginAuth());
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

//   if (checking) {
//     return (
//       <div>
//           espere
//       </div>
//     );
//   }

  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Logeo}
            isAuthenticated={isLoggedIn}
          />

          <PublicRoute
            exact
            path="/registro"
            component={Register}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/"
            component={DashboardRouter}
            isAuthenticated={isLoggedIn}
          />
        </Switch>
      </>
    </Router>
  );
}
