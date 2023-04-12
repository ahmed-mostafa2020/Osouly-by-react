import React, { useCallback } from 'react';
import Cards from '../components/Cards';
import { useState, useEffect } from 'react';
import '../style/Props.css';
import '../style/Cards.css';

import { API_URLS } from '../util/API_URLS';
import { getApi } from '../components/GetApi';

function CardsPropertiesList (){

  const [cards, setCards] = useState([]);

  const getCards = useCallback (async () => {
    const data = await getApi(API_URLS.HOME);
      setCards(data.data.property);
    },[getApi, API_URLS.HOME]);


  useEffect(() => {
    getCards();
  },[getCards]);


  const renderedCards = cards.map( (card) => {
    return <Cards card={card} key={card.id} slide={false} />;
  });

  return (
    <>
      <div className='cards-box col-sm-12 col-md-8 col-lg-8'>
        {renderedCards}
      </div>
    </>
  )
}

export default CardsPropertiesList ;
