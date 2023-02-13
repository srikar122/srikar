import '../styles/Projects.css'
import React from 'react'
import example from '../images/Screenshot (1).png'
import pimg1 from '../images/WhatsApp Image 2022-10-24 at 3.50.59 PM.jpeg'
import pimg2 from '../images/WhatsApp Image 2022-10-24 at 3.50.59 PM (1).jpeg'

function Projects() {
  return (
  <div className='p'>
        <h1 className='p-head'>Projects</h1>
      <div className='p-wrapper'>
        <a href='' className='p-card' >
          <div className='p-card-inner'>
            <div className='p-img-group'>
            <img src={pimg1} className='p-inner-img'></img>
          <img src={pimg2} className='p-inner-img img-2'></img>
            </div>
                <h2 className='p-title'>Portfolio Website</h2>
                
                <a href='' className='p-link'>
                      <p className='p-buttonf'>html</p>
                      <p className='p-button'>css</p>
                      <p className='p-button'>react</p>
                      <p className='p-buttonl'>bootstrap</p>

                </a>
                <p className='p-info'>
                  this is my project and this deals with some stuff this is my project

                </p>
            </div>
        </a>
      </div>
    </div>
  )
}

export default Projects