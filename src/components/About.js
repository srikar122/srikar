import React from 'react'
import '../styles/About.css'
import Social from '../components/Social.js'
import profimgbw from '../images/WhatsApp Image 2022-10-05 at 3.38.39 PM-modified.jpeg'
import profimgc from '../images/WhatsApp Image 2022-10-05 at 3.38.39 PM.png'


function About() {
  return (
    <div className='a'>
        <div className='a-left'>   
            <div className='a-card'></div>
            <div className='a-img'>
              {/* <img src={profimgbw} alt='' className='i-profimg'/> */}
              <img src={profimgc} alt='' className='i-profimg'/>

            </div>
        
        </div>
        <div className='a-right'>
            <h1 className='a-heading'>About me</h1>
            <p className='a-sub'>
            My strength is that I am always ready to take up new challenges and strive for excellence. This is because I believe success and failures are the best way to sculpt ourselves
                         to reach our goals.
             My strength is that I am always ready to take up new challenges and strive for excellence. This is because I believe success and failures are the best way to sculpt ourselves
                         to reach our goals.
            My strength is that I am always ready to take up new challenges and strive for excellence. This is because I believe success and failures are the best way to sculpt ourselves
                         to reach our goals.
            </p>
          <div className='socail-list'>
          <Social></Social>
          </div>
         
        </div>

    </div>
  )
}

export default About