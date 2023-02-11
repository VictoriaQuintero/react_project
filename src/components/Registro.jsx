import Nav from "./Nav.jsx";

function Registro(){
    return(
        <div>
            <Nav condition= {true}/>
            <form action="">
                <h1>
                    Registrate
                </h1>
                <input type="text" name="Nombre" placeholder="Nombre" id="" />
                <input type="text" name="Correo" placeholder="Correo Electronico" id="" />
                <input type="text" name="Contraseña" placeholder="Contraseña" id="" />
                <input type="submit" value="Comenzar" />
                <p>Ya tengo una cuenta, <a href=""><strong>Inicia Sesión</strong></a></p>
            </form>
        </div>
    )
}

export default Registro;