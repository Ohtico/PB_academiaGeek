import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Datos = () => {
  let array = [];
  const view = useSelector((wats) => wats.candidato.WatchCan);
  const [vista, setVista] = useState(view);


  useEffect(() => {
    setVista(view);
    
  }, [view,]);

  //   const traerRepo = async (id) => {
  //     const rest = await fetch(`https://api.github.com/users/${id}/repos`);
  //     const data = await rest.json();
  //     array.push(data);
  //     setReposit(data);
  //   };

  return (
    <>
      <div className=" table-responsive">
        <table className="table table-warning align-middle">
          <thead>
            <tr>
              <th scope="row">Nombre del Repositorio</th>
              <th> Lenguaje</th>
              <th>Brach por Defecto</th>
              <th>Url Git</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {/* {reposit.map((items, index) => (
              <tr>
                <th scope="row">{items?.name}</th>
                <td>{items?.language}</td>
                <td>{items?.default_branch}</td>
                <td className="text-truncate">
                  <Link> {items?.svn_url} </Link>{" "}
                </td>
                <td>{items?.description}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};
