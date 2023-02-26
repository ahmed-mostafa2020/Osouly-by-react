import React from 'react';
import '../style/Slider.css';
import logoName from '../assets/Group 110.png'

function Slider( {active, slider} ) {


  return (
    <>
      <div className={active}  >
          <img src={slider.image} className="image" alt={slider.description} />
          <div className='carousel-desc'>
            <figure>
              <img src={logoName} alt='logo name' />
            </figure>
            <p>{slider.description}</p>
          </div>
      </div>
    </>
  )
}

export default Slider;
