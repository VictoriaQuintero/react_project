import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav.jsx";

function Registro() {
    let navegacion = useNavigate();
  const ObtenerData = () => {
    let datosT = localStorage.getItem("Users");
    if (datosT) {
      return JSON.parse(datosT);
    } else {
      return [];
    }
  };

  const [Users, setUsers] = useState(ObtenerData());

  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");

  function DataGuardado(e) {
    e.preventDefault();
    let datos = {
      Nombre,
      Correo,
      Contraseña,
    };
    setUsers([...Users, datos]);
    setNombre('');
    setCorreo('');
    setContraseña('');
  }

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(Users));
  }, [Users]);

  return (
    <div className="App container_registros">

      <Nav condition={true} dataUser = {false} />

      <form className="formLogin formRegistro" onSubmit={DataGuardado}>
        <h1>Registrate</h1>
        <input
          value= {Nombre}
          type="text"
          name="Nombre"
          placeholder="Nombre"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          id="1"
          required
        />
        <input
        value={Correo}
          type="email"
          name="Correo"
          placeholder="Correo Electronico"
          onChange={(e) => {
            setCorreo(e.target.value);
          }}
          id="2"
          required
        />
        <input
        value={Contraseña}
          type="password"
          name="Contraseña"
          placeholder="Contraseña"
          onChange={(e) => {
            setContraseña(e.target.value);
          }}
          id="3"
          required
        />
          <input className="input2" type="submit" value="Comenzar" />
        <p>
          Ya tengo una cuenta,
          <Link to={"/"}>
            <strong>Inicia Sesión</strong>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Registro;
