import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav(props) {
  const { state } = useLocation();
  const estilos = {
    display: "none",
  };
  const estilos2 = {
    display: "flex",
  };
  return (
    <nav className="Nav">
      <img src="src\assets\logo1.png" alt="" />

      <div
        className="container_botones"
        style={props.condition ? estilos : estilos2}
      >
        <Link to={"/inicio"} state={state}>
          <button>Inicio</button>
        </Link>

        <Link to={"/perfil"} state={state}>
          <button>Perfil</button>
        </Link>

        <Link to={"/favoritos"} state={state}>
          <button>Favoritos</button>
        </Link>

        <Link to={"/"}>
          <div>
            <button className="cerrar_button">
              <strong>
                <p>Cerrar Sesión</p>
                {props.dataUser.name}
                <i className="fa-solid fa-circle-arrow-right"></i>
              </strong>
            </button>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
