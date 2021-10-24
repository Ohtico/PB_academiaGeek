import React, { useEffect, useState } from "react";
import { useForm } from "../../../hook/useForm";
import { useDispatch, useSelector } from "react-redux";
import { CandidatoNew, editCand } from "../../../action/ActionCandidato";

export const Formulario = () => {
  const [values, handleInputChange, reset, setValues] = useForm({
    nombre: "",
    apellido: "",
    cedula: "",
    fechaN: "",
    correo: "",
    usuario: "",
  });
  const { nombre, apellido, cedula, fechaN, correo, usuario } = values;
  const dispatch = useDispatch();
  const hanldeSubmit = async (e) => {
    e.preventDefault();
  };
  const handleAdd = () => {
    dispatch(CandidatoNew(values));
    reset();
    setEditarTk(false);
    setTitel(titulo1);
  };
  const handleEdt = async () => {
    dispatch(editCand(values));
    reset();
    setEditarTk(false);
    setTitel(titulo1);
  };
  let titulo1 = "Registrar Candidato";
  let titulo2 = "Editar Candidato";
  const [titel, setTitel] = useState(titulo1);
  const [editarTk, setEditarTk] = useState(false);
  const EditCan = useSelector((store) => store.candidato.EditCan);

  useEffect(() => {
    if (EditCan.length === undefined) {
      setEditarTk(true);
      setTitel(titulo2);
      setValues(EditCan);
    } else {
      setEditarTk(false);
      setTitel(titulo1);
      setValues("");
    }
  }, [EditCan]);

  return (
    <>
      <h4 className="mt-4 d-flex justify-content-center">{titel}</h4>
      <form className="container" onSubmit={hanldeSubmit}>
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
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
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
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cedula"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="cedula"
            value={cedula}
            onChange={handleInputChange}
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
            name="fechaN"
            value={fechaN}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Correo Electronico"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="correo"
            value={correo}
            onChange={handleInputChange}
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
            name="usuario"
            value={usuario}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid gap-2">
          {!editarTk ? (
            <button className="btn btn-info" onClick={handleAdd} type="submit">
              Registrar
            </button>
          ) : (
            <button className="btn btn-info" type="submit" onClick={handleEdt} >
              Editar
            </button>
          )}
        </div>
      </form>
    </>
  );
};
