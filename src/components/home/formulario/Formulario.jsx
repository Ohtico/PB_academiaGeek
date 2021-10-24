import React from "react";

export const Formulario = () => {

  
  return (
    <>
      <form className="container">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons " id="car">
              badge
            </i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Nombres"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons " id="car">
              badge
            </i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Apellidos"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cedula"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons " id="car">
              fingerprint
            </i>
          </span>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons " id="car">
              date_range
            </i>
          </span>
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de Nacimiento"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Correo Electronico"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            @ejemplo.com
          </span>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input
            type="text"
            className="form-control"
            placeholder="Usuario de GitHub"
            aria-label="Username"
          />
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-info" type="submit">
            Registrar
          </button>
        </div>
      </form>
    </>
  );
};
