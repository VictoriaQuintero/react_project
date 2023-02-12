import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import FormTweet from "./formularioTweet";
import Tweets from "./tweets";

function Perfil() {
  const { state } = useLocation();
  return (
    <>
      <Nav  condition= {false} dataUser ={state}/>
      <FormTweet/>
      <Tweets/>
    </>
  );
}

export default Perfil;