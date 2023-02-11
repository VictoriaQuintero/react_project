import Nav from "./Nav";

function InicioSesion(){
    return(
        <div>
            <Nav condition= {true}/>
            <form action="">
                <h1>
                    Inicio de Sesión
                </h1>
                <input type="text" name="Correo" placeholder="Correo Electronico" id="" />
                <input type="text" name="Contraseña" placeholder="Contraseña" id="" />
                <input type="submit" value="Comenzar" />
                <p>No tengo una cuenta, <a href=""><strong>Registrarme</strong></a></p>
            </form>
        </div>
    )
}

export default InicioSesion;