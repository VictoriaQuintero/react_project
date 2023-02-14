import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import FormTweet from "./formularioTweet";

function Perfil() {
  const { state } = useLocation();
  return (
    <div>
      <Nav condition={false} dataUser={state} />
      <FormTweet dataUser={state} />
    </div>
  );
}

export default Perfil;
