import React from "react";
import { Formulario } from "./formulario/Formulario";

import { Tabla } from "./tabla/Tabla";

export const Casa = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Formulario />
          </div>
          <div className="col ">
            <Tabla />
          </div>
        </div>
      </div>
    </>
  );
};
