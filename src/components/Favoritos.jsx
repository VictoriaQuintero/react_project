import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Tweets from "./tweets";

function Favoritos() {
  const { state } = useLocation();
  return (
    <>
      <Nav condition= {false} dataUser = {state}/>
      <Tweets />
    </>
  );
}

export default Favoritos;
