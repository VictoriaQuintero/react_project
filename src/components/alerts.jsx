function Alertas(props) {
  return (
    <div style={{display : props.Estilos}} className="alerta">
      <p>
        Ha ocurrido un problema,
        <strong>
             {props.Error}
        </strong>
      </p>
    </div>
  );
}

export default Alertas;
