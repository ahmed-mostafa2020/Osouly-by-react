import React, { useCallback } from 'react';
import Cards from '../components/Cards';
import { useState, useEffect } from 'react';
import '../style/Props.css';
import '../style/Cards.css';

function CardsPropertiesList (){

  const [cards, setCards] = useState([]);

  const url = 'https://test.osouly.com/public/api/home';

  const getCards = useCallback (async () => {
    await fetch(url).then((res) => res.json()).then((data) => {
      setCards(data.data.property);
    });
  },[])

  useEffect(() => {
    getCards();
  },[]);


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
