import { Link } from "react-router-dom";
function Nav(props) {
  const estilos = {
    display: "none",
  };
  const estilos2 = {
    display: "block",
  };
  return (
    <nav className="Nav">
      <img src="src\assets\logo1.png" alt="" />
      <div style={props.condition ? estilos : estilos2}>
        <Link to={'/inicio'}>
          <button>Inicio</button>
        </Link>
        <Link to={'/perfil'}>
          <button>Perfil</button>
        </Link>
        <Link to={'/favoritos'}>
          <button>Favoritos</button>
        </Link>
        <Link to={'/'}>
          <button>Cerrar Sesión</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
