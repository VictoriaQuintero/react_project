import Nav from "./Nav";
import FormTweet from "./formularioTweet";
import Tweets from "./tweets";

function Perfil() {
  return (
    <>
      <Nav />
      <FormTweet condition= {false}/>
      <Tweets/>
    </>
  );
}

export default Perfil;