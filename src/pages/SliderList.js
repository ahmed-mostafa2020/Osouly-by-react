import React, { useCallback } from 'react';
import Slider from '../components/Slider';
import { useState, useEffect } from 'react';
import '../style/Slider.css';

import { API_URLS } from '../util/API_URLS';
import { getApi } from '../components/GetApi';

function SliderList () {

  const [slidersWeb, setSlidersWeb] = useState([]);

  // api request with header
  const getSlidersWeb = useCallback (async () => {

    const data = await getApi(API_URLS.HOME, API_URLS.HEADER);
    setSlidersWeb(data.data.slider_web);
  },[getApi, API_URLS.HOME]);


  useEffect(() => {
    getSlidersWeb();
  },[getSlidersWeb]);

  const renderedSliderWeb = slidersWeb.map((slider,index) => {
    if(index === 0){
      var activeSlider = 'carousel-item active';
    }else{
      activeSlider = 'carousel-item';
    }
    return <Slider active={activeSlider} slider={slider} key={slider.description} />;
  });

  return (
    <>
    <section className='slider'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">
            {renderedSliderWeb}
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </section>
    </>
  )
}

export default SliderList;