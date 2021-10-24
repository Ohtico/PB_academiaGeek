import React from "react";

export const Tabla = () => {
  return (
    <>
      <div className=" table-responsive">
        <table className="table table-warning align-middle">
          <thead>
            <tr>
              <th scope="row">Nombres</th>
              <th> Cedula</th>
              <th>F. Nacimiento</th>
              <th>Correo</th>
              <th>Usuario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">victor</th>
              <td>1030708635</td>
              <td>29/07/98</td>
              <td className="text-truncate">victor@gmail.com</td>
              <td>ohtico</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
