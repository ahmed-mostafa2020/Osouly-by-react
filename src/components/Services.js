import React from 'react';
import '../style/Services.css';


function Services ( {item} ){
  //to convert [{}] => {}
  const flattenItem =  (Object.assign({}, ...item.image));

  return (
    <>
    <swiper-slide>
    <div className='item'>
      <figure>
        <img src={flattenItem.path} alt={item.title} />
      </figure>
      <div className='content'>
        <p className='title'> {item.title}  </p>
        <p className='text'> {`${(item.meta_key).slice(0,40)} ...`} </p>
      </div>
      <div className='subscribe'>
        <button>اشتراك</button>
      </div>
    </div>
    </swiper-slide>

    </>
  )
}

export default Services;