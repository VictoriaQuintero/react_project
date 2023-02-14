import { useEffect, useState } from "react";

function Tweets({ tweets, setTweet, seccion}) {
  if (tweets == [] || tweets == null) {
    return <h2>No hay Tweets</h2>;
  }
  let secion = [];
  if(seccion == 'fav'){
      secion = tweets.filter(x => x.favorito == true);
    }else{
      secion = tweets;
    }

  function EliminarData(id) {
    let data = localStorage.getItem("Totaltweets");
    data = JSON.parse(data);
    data.map((x, i) => {
      if (x.id == id) {
        data.splice(i, 1);
        localStorage.setItem("Totaltweets", JSON.stringify(data));
      }
    });
    setTweet(data);
  }

  function Favorito(id) {
    let data = localStorage.getItem("Totaltweets");
    data = JSON.parse(data);
    data.map((x, i) => {
      if (x.id == id) {
        for (const y in x) {
          if (y == 'favorito') {
            data[i][y] = true;
          }
        }
        localStorage.setItem("Totaltweets", JSON.stringify(data));
      }
    });
    setTweet(data);
  }

  return (
    <div className="container_cards">
      {secion.map((x) => (
        <div key={x.id} className="card">
          <h1>{x.usuario}</h1>
          <p>{x.fecha}</p>
          <p>{x.TweetBody}</p>
          <div>
            <i
              onClick={(e) => {
                Favorito(x.id);
              }}
              style={x.favorito ? { color: "black" } : { color: "gray" }}
              className="fa-solid fa-heart"
            ></i>
            <i
              className="fa-regular fa-trash-can"
              onClick={(e) => {
                EliminarData(x.id);
              }}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tweets;
