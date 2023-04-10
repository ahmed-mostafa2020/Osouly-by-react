import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import { FaUserAlt,FaFacebookF ,FaInstagram, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from 'react';

function Header() {
  const url = 'https://test.osouly.com/public/api/data';
  const [links, setLinks] = useState('');

  // links of social media
  const getLinks = useCallback (async () => {
    await fetch(url).then((res) => res.json()).then((data) => {
      setLinks(data.data.social_links);
    });
  },[])
  useEffect(() => {
    getLinks();
  },[]);

  return (
    <>
      <header>
        <div className='container'>
          <div className='icon-box'>
            <div className='log'>
              <div> <Link to='./profile'><FaUserAlt className='user' /></Link></div>
              <Link to={'./login'} ><div className='text'>تسجيل الدخول </div></Link>     
              <div className='dash'> <span>|</span></div>
              <Link to={'./register'}><div className='text'> حساب جديد</div></Link>  
            </div>

            <div className='social'>
              <Link to={links.facebook}>
                  <div ><FaFacebookF className='social'/></div>  
              </Link>
              <Link to={links.instagram}>
                  <div ><FaInstagram className='social'/></div>
              </Link>
              <Link to={links.twitter}>
                <div ><FaTwitter className='social'/></div>
              </Link>
            </div>
            
            <div className='language'>
              <div ><button className='ar'> ar</button></div>  
              <div><button className='en'> en</button></div>  
            </div>   

          </div>
        </div>
      </header>
    </>
  )
}

export default Header;