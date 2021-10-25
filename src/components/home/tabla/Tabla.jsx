import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeCandidato,
  DeleteCand,
  watchCandidato,
} from "../../../action/ActionCandidato";

let position = 1;

export const Tabla = () => {
  const { candidatos } = useSelector((store) => store.candidato);
  const view = useSelector((wats) => wats.candidato.WatchCan);
  const [allCan, setAllCan] = useState(candidatos);
  const [vista, setVista] = useState(view);
  const [reposit, setReposit] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [allBd, setAllBd] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setAllCan(candidatos);
  }, [candidatos]);

  useEffect(() => {
    setVista(view);
  }, [view]);

  // useEffect(() => {
  //   peticion(data.usuario);

  // }, [position]);

  const handleEdit = (data) => {
    dispatch(activeCandidato(data));
  };
  const handleDelete = (id) => {
    dispatch(DeleteCand(id));
  };
  const handleWatch = (data) => {
    dispatch(watchCandidato(data));
    peticion(data.usuario);
  };

  const peticion = (usuario) => {
    fetch(
      `https://api.github.com/users/${usuario}/repos?page=${position}&per_page=5`
    )
      .then((response) => response.json())
      .then((data) => setReposit(data));
    activa(usuario);
  };

  const activa = (usuario) => {
    fetch(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => response.json())
      .then((data) => setAllBd(data));
  };
  const back = (usuario) => {
    position--;
    fetch(
      `https://api.github.com/users/${usuario}/repos?page=${position}&per_page=5`
    )
      .then((response) => response.json())
      .then((data) => setReposit(data));
  };
  const next = (usuario) => {
    position++;
    fetch(
      `https://api.github.com/users/${usuario}/repos?page=${position}&per_page=5`
    )
      .then((response) => response.json())
      .then((data) => setReposit(data));
  };

  const handleBusqueda = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    let final = allBd.filter((rest) =>
      rest.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    setReposit(final);
  };
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
                  <tr key={item.id}>
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
                  Agregue un Candidato
                </h4>
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col">
          <div className="container">
            <h3 className="mt-2 d-flex justify-content-center">
              Candidato Seleccionado
            </h3>
            <div className="card m-4  ">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  {vista.nombre}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted d-flex justify-content-center">
                  {vista.apellido}
                </h6>
                <p className="card-text d-flex justify-content-center">
                  {vista.cedula}{" "}
                </p>
                <p className="card-text d-flex justify-content-center">
                  {vista.correo}
                </p>
                <h4 className="card-title d-flex justify-content-center">
                  {vista.usuario}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar Por Nombre"
        aria-label="Username"
        aria-describedby="basic-addon1"
        name="search"
        onChange={handleBusqueda}
      />
      <div className=" table-responsive">
        <table className="table table-warning align-middle">
          <thead>
            <tr>
              <th scope="row">Nombre del Repositorio</th>
              <th> Lenguaje</th>
              <th>Branch por Defecto</th>
              <th>Url Git</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {reposit.map((items, index) => (
              <tr>
                <th scope="row">{items.name}</th>
                <td>{items.language}</td>
                <td>{items.default_branch}</td>
                <td className="text-truncate">
                  <a href={items.svn_url}>{items.svn_url}</a>
                </td>
                <td>{items?.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h3 className="mt-2 d-flex float-end">
            <i
              className="material-icons"
              onClick={() => next(vista.usuario)}
              id="car"
            >
              arrow_forward_ios
            </i>
          </h3>
          <h3 className="mt-2 d-flex float-end">
            <i
              className="material-icons"
              onClick={() => back(vista.usuario)}
              id="car"
            >
              arrow_back_ios
            </i>
          </h3>
        </div>
      </div>
    </>
  );
};
