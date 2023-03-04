import React from 'react';
import '../style/Props.css';
import { useState, useEffect } from 'react';
import { FaMinus } from "react-icons/fa";


function PropsSearchPage  () {


  return (
    <>
      <div className='search-col col-sm-12 col-md-4 col-lg-4'>
        <div className='title'>
          <p>أبحث فى الوحدات <span></span></p>
        </div>

        <div className='table'>

        <div className='unit-part'>
          
            <button className="drop btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#unit-part" aria-expanded="false" aria-controls="unit-part">
              <p>نوع الوحدة</p>
              <span> <FaMinus /> </span>
            </button>
          <div className="collapse" id="unit-part">
            <div className="card card-body">
              Some placeholder content for the collapse component. 
            </div>
          </div>
        </div>

        <div className='desc'>
            <button className="drop btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#desc" aria-expanded="false" aria-controls="desc">
              <p>المواصفات </p>
              <span> <FaMinus /> </span>
            </button>
          <div className="collapse" id="desc">
            <div className="card card-body">
              Some placeholder content for the collapse component. 
            </div>
          </div>
        </div>

        <div className='location'>
            <button className="drop btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#location" aria-expanded="false" aria-controls="rooms">
              <p> المكان</p>
              <span> <FaMinus /> </span>
            </button>
          <div className="collapse" id="location">
            <div className="card card-body">
              Some placeholder content for the collapse component. 
            </div>
          </div>
        </div>







        </div>

      </div>

    </>
  );
}
export default PropsSearchPage;
