import React from 'react';
import './styles.css';
import pp from '../assets/pp.jpeg';
import ProfileHeader from '../Header/ProfileHeader';
import Buttons from '../Buttons/Buttons';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';


function Card () {
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={pp} alt='profile picture' className='card-pp'/>
        </div>
        <ProfileHeader />
        <Buttons />
        <MainContent className="mainContent"/>
        <Footer />
        
    </div>
  )
}

export default Card