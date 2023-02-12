import React, { useState, useEffect } from "react";

function FormTweet() {

  function GetDatos(){
    let DataT = localStorage.getItem('Totaltweets');
    if(DataT){
      return JSON.parse(DataT);
    }else{
      return [];
    }
  }

  const [Totaltweets, setTotaltweets] = useState(GetDatos());
  const [TweetBody, setTweetBody] = useState("");

  const guardarData = (e) => {
    e.preventDefault();
    let data = { TweetBody };
    setTotaltweets([...Totaltweets, data]);
  };

  useEffect(() => {
    localStorage.setItem("Totaltweets", JSON.stringify(Totaltweets));
  }, [Totaltweets]);

  return (
    <div className="container_form">
    <form className="formulario" onSubmit={guardarData}>
      <input
        type="text"
        name="tweet"
        placeholder="¿Qué estas pensando?"
        id="text1"
        onChange={(e) => {
          setTweetBody(e.target.value);
        }}
        required
      />
      <input id="input1" type="submit" value="twittear" />
    </form>
  </div>
  );
}

export default FormTweet;
