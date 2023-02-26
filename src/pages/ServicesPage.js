import React from 'react';
import Services from '../components/Services';
import '../style/Services.css';
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from 'react';

function ServicesPage () {

  const url = 'https://test.osouly.com/public/api/services';
  const[serviceItems, setServiceCItems] = useState([]);

  const getServiceItems = async () => {
    await fetch(url).then((res)=> res.json()).then((data) => {
      setServiceCItems(data.data.items);
    })
  }

  useEffect(() => {
    getServiceItems();
  },[]);

  const renderedItems = serviceItems.map((item) => {
      return ((item.id === 16) || (item.id === 19)) && <Services item={item} key={item.id} />
  });


  return (
    <>
    <section className='services'>
      <div className='container'>
        <div className='box'>
          <div className='title'> <span></span> <p>خدمات</p> </div>
          <div className='arrows'>
            <button className='right'> <span><FaChevronRight /></span> </button>
            <button className='left'> <span><FaChevronRight /></span> </button>
          </div>
        </div>
      </div>


      <swiper-container class="mySwiper" space-between="10" slides-per-view="3">
        
        {renderedItems}
      </swiper-container>

    </section>

    <div className='space'></div>
    
    </>
  )
}

export default ServicesPage;