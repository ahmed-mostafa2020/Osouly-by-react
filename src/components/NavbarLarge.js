import React, { useCallback } from 'react';
import '../style/NavbarLarge.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavbarLarge() {

  const [serviceDrops, setServiceDrops] = useState([]);
  const [pageDrops, setPageDrops] = useState([]);

  const url = 'https://test.osouly.com/public/api/data';


  // send requests
  const getServices = useCallback (async () => {
    const header =  {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
    await fetch(url, header).then((res) => res.json()).then((data) => {
      setServiceDrops(data.data.services);
    });
  },[])

  const getPages= useCallback (async () => {
    const header =  {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
    await fetch(url, header).then((res) => res.json()).then((data) => {
      setPageDrops(data.data.pages);
    });
  },[])


  useEffect(() => {
    getServices();
    getPages();

  },[]);

  // listing
  const renderedServices= serviceDrops.map((serviceDrop) => {
    return <>
        <li >
          <Link to='./' key={serviceDrop.id}>{serviceDrop.title} </Link>
        </li>
    </>
  });

  const renderedPages= pageDrops.map((pageDrop) => {
    return <>
        <li >
          <Link to='./' key={pageDrop.id}>{pageDrop.title} </Link>
        </li>
    </>
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
        <button class="burger-icon" type='button'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"  >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <img src={logo} alt='logo'/>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
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