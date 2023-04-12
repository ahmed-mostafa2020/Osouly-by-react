import React, { useCallback } from 'react';
import '../style/Cards.css';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaChevronRight } from "react-icons/fa";

import { API_URLS } from '../util/API_URLS';
import { getApi } from '../components/GetApi';


function CardsList() {

  const [cards, setCards] = useState([]);

  const getCards = useCallback (async () => {
    const data = await getApi(API_URLS.HOME);
      setCards(data.data.property);
  },[getApi, API_URLS.HOME]);


  useEffect(() => {
    getCards();
  },[getCards]);


  const renderedCards = cards.map( (card) => {
    return <Cards card={card} key={card.id} slide={true} />;
  });

  return (
    <>
    <section className='new-units'>
      <div className='container'>
        <div className='title'>
        <span></span> <p>الوحدات المضافة حديثا </p> 
        </div>
        <div className='arrows'>
          <div className='box'>
            <Link to='./properties'>عرض الكل</Link>
            <button className='right'> <span ><FaChevronRight /></span> </button>
            <button className='left'> <span ><FaChevronRight /></span> </button>
          </div>
        </div>
      </div>


      <swiper-container class="mySwiper" space-between="10" slides-per-view="3">
        {renderedCards}
      </swiper-container>
    </section>
    </>
  )
}

export default CardsList;

