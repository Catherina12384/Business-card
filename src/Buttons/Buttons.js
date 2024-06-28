import React from 'react';
import './styles.css';
import email from '../assets/logo/email.png';
import linkedin from '../assets/logo/linkedin.png';

function Buttons () {
  return (
    <div className='buttons'>
        <button className='mail-btn'><img src={email} alt='email' className='email'/>Mail</button>
        <button className='linked-in-btn'><img src={linkedin} alt='linkedin' className='linkedin'/>Linkedin</button>
    </div>
  )
}

export default Buttons