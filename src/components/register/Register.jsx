import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registroEmailPasswordNombre } from "../../action/ActionRegister";

export const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      pass1: "",
      pass2: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required(),
      email: Yup.string().email().required(),
      pass1: Yup.string().required(),
      pass2: Yup.string().required(),
    }),
    onSubmit: (formData) => {
      dispatch(
        registroEmailPasswordNombre(
          formData.email,
          formData.pass1,
          formData.nombre
        )
      );
    },
  });

  return (
    <>
      <div className="container mt-5  text-white">
        <div className="container p-5">
          <form className="row g-2 caja p-2" onSubmit={formik.handleSubmit}>
            <h3 className="d-flex justify-content-center ">Registro</h3>

            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                name="nombre"
                onChange={formik.handleChange}
                error={console.log(formik.errors.nombre)}
              />
              <span>{formik.errors.nombre}</span>
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
                onChange={formik.handleChange}
                error={formik.errors.email}
              />
              <span>{formik.errors.email}</span>
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Contraseña 1
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                name="pass1"
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Contraseña 2
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                name="pass2"
                onChange={formik.handleChange}
              />
            </div>
            <div className="my-3 text-center">
              <span>
                Tienes cuenta?{" "}
                <Link
                  id="textD"
                  className="hover-underline-animation"
                  to="/login"
                >
                  {" "}
                  <strong> Inicia Sesión</strong>
                </Link>{" "}
              </span>
            </div>
            <div className="d-flex justify-content-center my-3">
              <button type="submit" className="btn btn-info ">
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
