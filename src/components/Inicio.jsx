import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import FormTweet from './formularioTweet';
import Tweets from './tweets';

function Inicio() {
  const { state } = useLocation();




  return (
    <div>
      <Nav condition={false} dataUser={state} />
      <FormTweet dataUser={state} />
    </div>
  );
}

export default Inicio;
