import React from 'react';
import '../style/About.css';
import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';

function About() {

  const url = 'https://test.osouly.com/public/api/home';
  const [aboutText, setAboutText] = useState('');

  const getAboutText = async () => {
    await fetch(url).then((res) => res.json()).then((data) => {
      setAboutText(data.data.about);
    });
  }

  
  useEffect(() => {
    getAboutText();
  },[]);

  return (
    <>
    <section className='about'>
      <div className='container'>
        <div className='row'>
          <div className='text-col col-lg-6 col-md-6 col-sm-12'>
            <div>
              <figure>
                <img src={logo} alt='logo' />
              </figure>
              <p> {aboutText.meta_description} </p>
            </div>
          </div>
          <div className='video-col col-lg-6 col-md-6 col-sm-12'>
            <iframe src="https://www.youtube.com/embed/-0DnEH0n7pg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
export default About;
