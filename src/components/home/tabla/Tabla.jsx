import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeCandidato, DeleteCand } from "../../../action/ActionCandidato";

export const Tabla = () => {
  const { candidatos } = useSelector((store) => store.candidato);
  const [allCan, setAllCan] = useState(candidatos);
  const dispatch = useDispatch();

  useEffect(() => {
    setAllCan(candidatos);
  }, [candidatos]);

  const handleEdit = (data) => {
    dispatch(activeCandidato(data));
  };
  const handleDelete = (id) => {
    dispatch(DeleteCand(id));
  };
  const handleWatch = (data)=>{
    console.log(data)
  }
  return (
    <>
      <h4 className="mt-4 d-flex justify-content-center">
        Candidatos Registrados
      </h4>
      <div className=" table-responsive">
        <table className="table table-warning align-middle">
          <thead>
            <tr>
              <th scope="row">Nombres</th>
              <th> Cedula</th>
              <th>F. Nacimiento</th>
              <th>Correo</th>
              <th>Usuario</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {allCan.length ? (
              <>
                {" "}
                {allCan.map((item, index) => (
                  <tr >
                    <th scope="row">
                      {item.nombre} {item.apellido}
                    </th>
                    <td>{item.cedula}</td>
                    <td>{item.fechaN}</td>
                    <td className="text-truncate">{item.correo}</td>
                    <td>{item.usuario}</td>
                    <td>
                      <i
                        className="material-icons"
                        id="car"
                        onClick={() => handleEdit(item)}
                      >
                        edit
                      </i>{" "}
                      <i
                        className="material-icons"
                        id="car"
                        onClick={() => handleDelete(item.id)}
                      >
                        backspace
                      </i>
                      <i
                        className="material-icons"
                        id="car"
                        onClick={() => handleWatch(item)}
                      >
                        visibility
                      </i>
                    </td>
                  </tr>
                ))}{" "}
              </>
            ) : (
              <>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_282/v1634161932/Stuck_at_Home_Searching_np7xc6.png"
                    alt="No hay tareas"
                  />
                </div>
                <h4 className="d-flex justify-content-center m-3">
                  Generate a New Task
                </h4>
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col">
          <div className="container">
            <h3>Candidato Seleccionado</h3>
          </div>
        </div>
      </div>
    </>
  );
};
