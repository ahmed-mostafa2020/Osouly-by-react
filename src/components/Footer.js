import React, { useCallback } from 'react';
import '../style/Footer.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebookF ,FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from 'react';

import {API_URLS} from '../util/API_URLS';
import { getApi } from './GetApi';

function Footer () {

  const [about, setAbout] = useState('');
  const [links, setLinks] = useState('');

  // footer/about text & links of social media
  const getItems = useCallback (async () => {
    const data = await getApi(API_URLS.DATA);

    setAbout(data.data);
    setLinks(data.data.social_links);

  },[getApi, API_URLS.DATA]);

  useEffect(() => {
    getItems();
  },[getItems]);

  return (
    <>
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='logo-col col-lg-5 col-md-6 col-sm-12'>
            <figure>
              <img src={logo} alt='logo' />
            </figure>
            <p>{about.footer_about}</p>
          </div>

          <div className='links-col col-lg-3 col-md-6 col-sm-12'>
            <p>روابط سريعة</p>
            <div className='links'>
              <ul>
                <li> <Link to='./'>الرئيسية</Link></li>
                <li> <Link to='./about'>عن أصولى </Link></li>
                <li> <Link to='./contact'>تواصل معنا</Link></li>
                <li> <Link to='services'>خدمات</Link></li>
              </ul>
            </div>
          </div>

          <div className='social-col col-lg-4 col-md-6 col-sm-12'>
          <p>تابعنا </p>

          <div className='social'>
            <ul>
              <li> <Link to={links.facebook}><FaFacebookF/></Link> </li>
              <li> <Link to={links.twitter}><FaTwitter/></Link> </li>
              <li> <Link to={links.instagram}><FaInstagram/></Link> </li>
              <li> <Link to={links.youtube}><FaYoutube/></Link> </li>
            </ul>
          </div>
          <div className='mail'>
            <input type='email' placeholder='البريد الإلكترونى' />
            <button>اشترك</button>
          </div>
          </div>
        </div>
      </div>
    </footer>
    
    <section className='rights'>
      <div className='container'>
        <p>كل الحقوق محفوظة لأصولى</p>
      </div>

    </section>
    </>
  )
}

export default Footer