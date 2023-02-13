import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";

function InicioSesion() {
  let navegacion = useNavigate();
  let error = "";
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  function ValidarData(e) {
    e.preventDefault();

    let datosTotal = localStorage.getItem("Users");
    datosTotal = JSON.parse(datosTotal);

    if (datosTotal) {
      datosTotal.map((x) => {
        if (x.Correo == correo && x.Contraseña == contraseña) {
            let name = x.Nombre;
          navegacion("/inicio", {state: {
            name
          }});
        } else {
          error = "notFund";
        }
      });
    } else {
      error = "noData";
    }
  }

  return (
    <div className="Login">
      <Nav condition={true} dataUser = {false} />
      <form className="formLogin" onSubmit={ValidarData}>
        <h1>Iniciar Sesión</h1>
        <input
          type="email"
          name="Correo"
          onChange={(e) => {
            setCorreo(e.target.value);
          }}
          placeholder="Correo Electronico"
        />
        <input
          type="password"
          name="Contraseña"
          onChange={(e) => {
            setContraseña(e.target.value);
          }}
          placeholder="Contraseña"
        />
        <input className="input2" type="submit" value="Comenzar" />
        <p>
          No tengo una cuenta, 
          <Link to={"/registro"}>
            <strong> Registrarme</strong>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default InicioSesion;
