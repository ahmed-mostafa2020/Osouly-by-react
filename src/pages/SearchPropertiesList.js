import React, { useCallback } from 'react';
import '../style/Props.css';
import { useState, useEffect } from 'react';
import { FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { API_URLS } from '../util/API_URLS';
import { HEADER_API } from '../util/HEADER_API';


function SearchPropertiesList  () {

  const [options, setOptions] = useState([]);
  const [cities, setCities] = useState([]);

  const [placeHolderCountry, setPlaceHolderCountry ] = useState(' البلد');
  const [placeHolderCity, setPlaceHolderCity ] = useState(' المدينة');


  // fake api for countries
  const countries =[
    {id: '1', name: 'مصر'},
    {id: '2', name: 'السعودية'},
    {id: '3', name: 'الإمارات'},
    {id: '4', name: 'قطر'},
]

const getTypes = useCallback (async () => {
  await fetch(API_URLS.DATA).then((res) => res.json()).then((data) => {
    setOptions(data.data.property_type);
  });
},[])

const getCities = useCallback (async () => {

  await fetch(API_URLS.SEARCH,HEADER_API).then((res) => res.json()).then((data) => {
    setCities(data.data);
  });
},[])
useEffect(() => {
  getTypes();
  getCities();
},[]);


const renderedTypes = options.map((option) => {
  return <>
  <div key={option.id} className='radio-box'>
    <input type='radio' id={option.name} value={option.name} name='option'/>
    <label for={option.name} >{option.name} </label>

    
  </div>
  </>
});

const countryChange = (name) => {
  setPlaceHolderCountry(name);
};

const renderedCountries = countries.map((country) => {
  return <>
  <li key={country.id} onClick={() => countryChange(country.name)}>
    <Link className="dropdown-item">{country.name}</Link>
  </li></>
});

const cityChange = (name) => {
  setPlaceHolderCity(name);
};

const renderedCities = cities.map((city) => {
  return <>
  <li key={city.id} onClick={() => cityChange(city.name)}>
    <Link className="dropdown-item">{city.name}</Link>
  </li></>
});

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
            <div className='wrap'>
              <div className="card card-body">
                {renderedTypes}
              </div>  
            </div>
          </div>
        </div>

        <div className='desc'>
            <button className="drop btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#desc" aria-expanded="false" aria-controls="desc">
              <p>المواصفات </p>
              <span> <FaMinus /> </span>
            </button>
          <div className="collapse" id="desc">
            <div className='wrap'>

              <div className="card line card-body">
                <label>المساحة</label>
                <input type='range' />
              </div>

              <div className="card line card-body">
                <label>عدد الغرف</label>
                <div className='box'>
                  <input type='text' placeholder='من'/>
                  <input type='text' placeholder='إلى'/>
                </div>
              </div>

              <div className="card card-body">
                <label>الدور</label>
                <div className='box'>
                  <input type='text' placeholder='من'/>
                  <input type='text' placeholder='إلى'/>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='location'>
            <button className="drop btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#location" aria-expanded="false" aria-controls="rooms">
              <p> المكان</p>
              <span> <FaMinus /> </span>
            </button>
          <div className="collapse" id="location">
            <div className='wrap'>
            <div className="card card-body">
              <div className='country'>
                  <div className="dropdown">
                      <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        {placeHolderCountry}
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        {renderedCountries}
                      </ul>
                    </div>
                </div>

              <div className='city'>
              <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                    {placeHolderCity}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                  {renderedCities}
                  </ul>
                </div>
              </div>
              </div>

            </div>

          </div>
        </div>

        </div>

      </div>

    </>
  );
}
export default SearchPropertiesList;
