import React from 'react';
import '../style/NavbarLarge.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavbarLarge() {

  const [serviceDrops, setServiceDrops] = useState([]);
  const [pageDrops, setPageDrops] = useState([]);

  const url = 'https://test.osouly.com/public/api/data';


  // send requests
  const getServices = async () => {
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
  }

  const getPages= async () => {
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
  }


  useEffect(() => {
    getServices();
    getPages();

  },[]);

  // listing
  const renderedServices= serviceDrops.map((serviceDrop) => {
    return <>
        <li key={serviceDrop.id}>
          <Link to='./'>{serviceDrop.title} </Link>
        </li>
    </>
  });

  const renderedPages= pageDrops.map((pageDrop) => {
    return <>
        <li key={pageDrop.id}>
          <Link to='./'>{pageDrop.title} </Link>
        </li>
    </>
  });

  // function myFunction(x) {
  //   x.classList.toggle("change");
  // }

  return (
    <section className='navbar'>
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

        {/* burger icon and side menu */}
        {/* <div>
          <div class="burger" >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div> */}

      </div>
    </section>
  )
}

export default NavbarLarge;