import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import FormTweet from "./formularioTweet";
import Tweets from "./tweets";

function Inicio() {
  const { state } = useLocation();
  return (
    <div>
      <Nav condition={false} dataUser={state ? state : props} />
      <FormTweet />
      <Tweets />
    </div>
  );
}

export default Inicio;
