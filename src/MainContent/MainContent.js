import React from 'react';
import'./styles.css';

function MainContent () {
  return (
    <div className='mainContent'>
        <div className='about'>
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className='interests'>
            <h2>Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </div>
  )
}

export default MainContent