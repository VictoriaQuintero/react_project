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
    <form onSubmit={guardarData}>
      <input
        type="text"
        name="tweet"
        placeholder="¿Qué estas pensando?"
        id=""
        onChange={(e) => {
          setTweetBody(e.target.value);
        }}
        required
      />
      <input type="submit" value="twittear" />
    </form>
  );
}

export default FormTweet;
