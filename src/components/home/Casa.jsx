import React from "react";
import { Formulario } from "./formulario/Formulario";
import { Tabla } from "./tabla/Tabla";

export const Casa = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="mt-4 d-flex justify-content-center">
              Registrar Candidato
            </h4>
            <Formulario />
          </div>
          <div className="col ">
            <h4 className="mt-4 d-flex justify-content-center">
              Candidatos Registrados
            </h4>
            <Tabla />
          </div>
        </div>
      </div>
    </>
  );
};
