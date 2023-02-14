import { useEffect, useState } from 'react';
function Tweets({ tweets }) {
  console.log(tweets);

  if (tweets == [] || tweets == null) {
    return <h2>No hay Tweets</h2>;
  }

  // function EliminarData(e){
  //   console.log(e)
  // }
  return (
    <div className='container_cards'>
      {tweets.map((x) => (
        <div key={x.id} className='card'>
          <h1>{x.usuario}</h1>
          <p>{x.fecha}</p>
          <p>{x.TweetBody}</p>
          <div>
            <i className='fa-solid fa-heart' ></i>
            <i className='fa-regular fa-trash-can'></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tweets;
