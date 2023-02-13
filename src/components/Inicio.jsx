import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import FormTweet from "./formularioTweet";
import Tweets from "./tweets";

function Inicio() {
  const { state } = useLocation();

  const [data, setData] = useState([]);

  function GetDatos() {
    setData(localStorage.getItem("Totaltweets"));
    if(data[0]){
      return data;
    }else{
      return [];
    }
  }

  useEffect(()=>{
    GetDatos()
  },[data]);


  return (
    <div>
      <Nav condition={false} dataUser={state} />
      <FormTweet
        dataUser={state}
      />
      <Tweets tweets ={GetDatos} section={"inicio"} />
    </div>
  );
}

export default Inicio;
