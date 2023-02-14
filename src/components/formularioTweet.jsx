import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tweets from './tweets';

function FormTweet({ dataUser, seccion}) {
  function GetDatos() {
    let DataT = localStorage.getItem('Totaltweets');
    if (DataT) {
      return JSON.parse(DataT);
    } else {
      return [];
    }
  }

  const [Totaltweets, setTotaltweets] = useState(GetDatos());

  const [TweetBody, setTweetBody] = useState('');

  const guardarData = (e) => {
    e.preventDefault();
    let time = new Date();
    let data = {
      id: uuidv4(),
      usuario: dataUser.name,
      fecha: time.toLocaleDateString('en-US'),
      TweetBody,
      favorito: false
    };
    setTotaltweets([...Totaltweets, data]);
  };

  useEffect(() => {
    localStorage.setItem('Totaltweets', JSON.stringify(Totaltweets));
  }, [Totaltweets]);

  return (
    <>
      <div className='container_form'>
        <form className='formulario' onSubmit={guardarData} id='formulario-aja'>
          <input
            type='text'
            name='tweet'
            placeholder='¿Qué estas pensando?'
            id='text1'
            onChange={(e) => {
              setTweetBody(e.target.value);
            }}
            required
          />
          <input id='input1' type='submit' value='twittear' />
        </form>
      </div>
      <Tweets seccion = {seccion} tweets={Totaltweets} setTweet={setTotaltweets} section={'inicio'} />
    </>
  );
}

export default FormTweet;
