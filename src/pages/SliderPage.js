import React from 'react';
import Slider from '../components/Slider';
import { useState, useEffect } from 'react';
import '../style/Slider.css';

function SliderPage () {

  const [slidersWeb, setSlidersWeb] = useState([]);
  const url = 'https://test.osouly.com/public/api/';

  // api request with header
  const getSlidersWeb = async () => {
    const header =  {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }

    await fetch(`${url}home`, header).then((res) => res.json()).then((data) => {
      setSlidersWeb(data.data.slider_web);
    });
  }

  useEffect(() => {
    getSlidersWeb();

  },[]);

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

export default SliderPage;