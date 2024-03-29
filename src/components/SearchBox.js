import React, { useCallback } from 'react';
import '../style/Search.css';
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import { API_URLS } from '../util/API_URLS';
import { getApi } from './GetApi';

function SearchBox () {

  const [options, setOptions] = useState([]);
  const [cities, setCities] = useState([]);
  const [placeHolderType, setPlaceHolderType ] = useState('نوع الشقة');
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
    const data = await getApi(API_URLS.DATA);
      setOptions(data.data.property_type);
  },[getApi, API_URLS.DATA]);


const getCities = useCallback (async () => {
  const data = await getApi(API_URLS.SEARCH, API_URLS.HEADER);
    setCities(data.data);
  },[getApi, API_URLS.SEARCH]);


  useEffect(() => {
    getTypes();
    getCities();
  },[getTypes, getCities]);

  const typeChange = (option) => {
    setPlaceHolderType(option);
  };

  const renderedTypes = options.map((option) => {
    return (
      <li key={option.id} onClick={() => typeChange(option.name)}>
      <Link className="dropdown-item">{option.name}</Link>
    </li>
    )
  });


  const countryChange = (name) => {
    setPlaceHolderCountry(name);
  };

  const renderedCountries = countries.map((country) => {
    return(
    <li key={country.id} onClick={() => countryChange(country.name)}>
      <Link className="dropdown-item">{country.name}</Link>
    </li>)
  });

  const cityChange = (name) => {
    setPlaceHolderCity(name);
  };

  const renderedCities = cities.map((city) => {
    return( 
    <li key={city.id} onClick={() => cityChange(city.name)}>
      <Link className="dropdown-item">{city.name}</Link>
    </li>)
  });

  return (
    <>
    <section className='search'>
        <div className='container'>
          <div className='box'>
            <p>بحث</p>

            <div className='units'>
              <div className='type'>
                <label>نوع الشقة</label>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {placeHolderType}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {renderedTypes}
                  </ul>
                </div>
              </div>

              <div className='area'>
              <label> مساحة الوحدة</label>
                <input placeholder='من' type='number' />
                <input placeholder='إلى' type='number'/>
              </div>

              <div className='deposit'>
              <label> مقدم الإيجار</label>
              <input placeholder='من'  type='number'/>
              <input placeholder='إلى' type='number'/>
              </div>
            </div>

            <div className='place'>
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

            <div className='search-btn'>
              <button>
                بحث
              </button>
            </div>
              
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default SearchBox;