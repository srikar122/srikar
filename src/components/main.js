import React from 'react'
import '../styles/main.css'
import image from '../images/WhatsApp_Image_2022-10-05_at_5.15.00_PM-removebg-preview-removebg-preview.png'
import About from '../components/About.js'
import Social from '../components/Social.js'

function main() {
  return (
    <div>
    <div className='i'>
            <div className='i-right'>
            <div className='i-bg'></div>
         <div className='new-img'>   <img src={image} alt="" className='my-photo'></img></div>
        </div> 
        <div className='i-left'>
            <div className='i-left-wrapper'>
                    {/* <p className='hai'>Hai,my name is</p> */}
                    <h1 className="name">Srikar Mara</h1>
                <div className='title'>
                    <div className='title-wrapper'>
                            <div className='i-title-item'>Student</div>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Enthusiast Coder</div>
                            <div className='i-title-item'>Music Lover</div>
                            <div className='i-title-item'>Foodie</div>
                    </div>
                </div>
                <div className='i-description'>
                    <p>Hey guys!! Welcome to my blog. Here you can have a glance at my journey as a web development enthusiast
                     and get a gist of my projects.this website is collection of my attributes and ideologies</p>
                </div>
                <Social></Social>
            </div>


        </div>

        

    </div>
    {/* <About/> */}
    </div>
  )
}

export default main