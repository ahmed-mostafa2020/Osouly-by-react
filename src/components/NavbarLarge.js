import React, { useCallback } from 'react';
import '../style/NavbarLarge.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {API_URLS} from '../util/API_URLS';
import { getApi } from './GetApi';

function NavbarLarge() {

  const [serviceDrops, setServiceDrops] = useState([]);
  const [pageDrops, setPageDrops] = useState([]);

  // send requests
  const getPages = useCallback (async () => {

    const data = await getApi(API_URLS.DATA, API_URLS.HEADER);
      setServiceDrops(data.data.services);
      setPageDrops(data.data.pages);

    },[getApi, API_URLS.DATA]);


  useEffect(() => {
    getPages();
  },[getPages]);

  // listing
  const renderedServices= serviceDrops.map((serviceDrop) => {
    return( 
        <li key={serviceDrop.id}>
          <Link to='./' >{serviceDrop.title} </Link>
        </li>)
  });

  const renderedPages= pageDrops.map((pageDrop) => {
    return( 
        <li key={pageDrop.id}>
          <Link to='./' >{pageDrop.title} </Link>
        </li>)
  });

  // const myFunction = (x) => {
  //   x.classList.toggle("change");
  // }

  return (
    <nav className='navbar'>
      <div className='container'>
      
        <div className='nav-menu'>
          <div className='nav-start'>
            <div className='nav-logo'>
              <img src={logo} alt='logo'/>
            </div>

            <ul className='lists'>

              <li>
                <Link className='active' to='./'> الرئيسية</Link>
              </li>

              <li className='has-drop'>
                <Link to='./#'> عن أصولى</Link>
                <div className='dropdown'>
                  <ul>
                    {renderedPages}
                  </ul>
                </div>
              </li>

              <li>
                <Link to='./contact'> تواصل معنا</Link>
              </li>

              <li className='has-drop'>
                <Link to='./#'> خدمات</Link>
                <div className='dropdown'>
                  <ul>
                    {renderedServices}
                  </ul>
                </div>
              </li>

              <li className='has-drop'>
                <Link to='./#'> الوحدات</Link>
                <div className='dropdown'>
                  <ul>
                    <li>
                      <Link>الوحدات المضافة حديثا</Link>      
                    </li>
                    <li>
                      <Link>الوحدات المميزة</Link> 
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
          
        <div className='nav-end'>
          <input />
          <button>بحث الوحدات</button>
          <Link className='add' to='./properties/create'>إضافة وحدة</Link>
        </div>

                        {/* burger icon */}
        <button className="burger-icon" type='button'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"  >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <img src={logo} alt='logo'/>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div>
            <Link className='title active' to='./'><span></span>الرئيسية</Link>

            <Link className='title' to='./#'><span></span>عن أصولى</Link>
            <ul>
            {renderedPages}
            </ul>

            <Link className='title' to='./contact'><span></span>تواصل معنا</Link>

            <Link className='title' to='./#'><span></span>خدمات</Link>
            <ul>
            {renderedServices}
            </ul>

            <Link className='title' to='./#'><span></span>الوحدات</Link>
            <ul>
              <li>
                <Link>الوحدات المضافة حديثا</Link>      
              </li>
              <li>
                <Link>الوحدات المميزة</Link> 
              </li>
            </ul>


            <div className='box'>
              <input />
              <button>بحث الوحدات</button>
              <Link className='add' to='./properties/create'>إضافة وحدة</Link>
            </div>

            </div>
            
          </div>
        </div>

      </div>
    </nav>
  )
}

export default NavbarLarge;