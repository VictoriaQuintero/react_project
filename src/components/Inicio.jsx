import Nav from "./Nav";
import FormTweet from "./formularioTweet";
import Tweets from "./tweets";

function Inicio() {
  return(
    <div>
      <Nav condition = {false}/>
      <FormTweet/>
      <Tweets/>
    </div>
  );
}

export default Inicio;
