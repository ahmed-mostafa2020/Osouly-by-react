import React from 'react';
import '../style/Cards.css';
import { FaRegHeart } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import  area from '../assets/noun_area_1653540.svg';
import bed from '../assets/noun_bedroom_1875010.svg';
import bath from '../assets/noun_Bathroom_1281426.svg'


function Cards({card ,slide}) {

const renderedImages = card.images.map((image, index) => {
  var active = 'carousel-item active';
  if (index === 0){
    active = 'carousel-item active';
  }
  else{
    active = 'carousel-item ';
  }
  return( 
      <div className={active} key={image.id}>
        <img className='card-img' src={image.path} alt={card.title}  />
      </div>
  );
})


if(slide === true){
  return(
    <>
      <swiper-slide>
          <div className='card'>
            <div className='upper-box'>

              <div id={card.id} className="carousel slide carousel-fade"  data-bs-ride="carousel" data-interval="1" >
                <button className='heart'> <FaRegHeart /></button>
                <span className='price'>{card.price} / شهر</span>
                <div className="carousel-inner" role="listbox">
                    {renderedImages}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${card.id}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${card.id}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>

            <div className='lower-box'>
                <div className='box-1'>
                  <div className='date'> {card.created_at} </div>
                  <div className='purpose'> {card.purpose} </div>
                </div>
                <div className='title'> {card.title} </div>
                <div className='address'> <span><MdLocationPin/></span>  {card.short_addree}  </div>
                <div className='unit'>
                  <div className='area'>
                    <figure>
                      <img src={area} alt='area' />
                    </figure>
                    <span> {card.space} </span>
                  </div>
                  <div className='bed'>
                    <figure>
                      <img src={bed} alt='bed' />
                    </figure>
                    <span>   {card.room_number} غرفة نوم </span>
                  </div>
                  <div className='bath'>
                    <figure>
                      <img src={bath} alt='bath' />
                    </figure>
                    <span className='number'> {card.bathroom_number} حمامات </span>
                  </div>
                </div>
            </div>
          </div>
          </swiper-slide>
    </>
  )
}

  else return (
    <>
          <div className='card'>
            <div className='upper-box'>

              <div id={card.id} className="carousel slide carousel-fade"  data-bs-ride="carousel" data-interval="1" >
                <button className='heart'> <FaRegHeart /></button>
                <span className='price'>{card.price} / شهر</span>
                <div className="carousel-inner" role="listbox">
                    {renderedImages}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${card.id}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${card.id}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>

            <div className='lower-box'>
                <div className='box-1'>
                  <div className='date'> {card.created_at} </div>
                  <div className='purpose'> {card.purpose} </div>
                </div>
                <div className='title'> {card.title} </div>
                <div className='address'> <span><MdLocationPin/></span>  {card.short_addree}  </div>
                <div className='unit'>
                  <div className='area'>
                    <figure>
                      <img src={area} alt='area' />
                    </figure>
                    <span> {card.space} </span>
                  </div>
                  <div className='bed'>
                    <figure>
                      <img src={bed} alt='bed' />
                    </figure>
                    <span>   {card.room_number} غرفة نوم </span>
                  </div>
                  <div className='bath'>
                    <figure>
                      <img src={bath} alt='bath' />
                    </figure>
                    <span className='number'> {card.bathroom_number} حمامات </span>
                  </div>
                </div>
            </div>
          </div>

    </>
  )
}
export default Cards;
