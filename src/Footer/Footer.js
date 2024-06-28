import React from 'react';
import './styles.css';
import twitter from '../assets/logo/twitter.png';
import facebook from '../assets/logo/facebook.png';
import insta from '../assets/logo/instagram.png';
import github from '../assets/logo/github.png';

function Footer () {
  return (
    <div className='footer'>
        <img src={twitter} alt='twitter'/>
        <img src={facebook} alt='facebook'/>
        <img src={insta} alt='insta'/>
        <img src={github} alt='github'/>
    </div>
  )
}

export default Footer