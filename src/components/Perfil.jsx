import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import FormTweet from "./formularioTweet";
import Tweets from "./tweets";

function Perfil() {
  const { state } = useLocation();
  return (
    <div>
      <Nav  condition= {false} dataUser ={state}/>
      <FormTweet dataUser={state}/>
      <Tweets section = {'perfil'}/>
    </div>
  );
}

export default Perfil;