import React from 'react'
import '../styles/Social.css'
import gitimg from '../images/githubimg.png'
import linkedimg from '../images/linkedimg.png'
import instaimg from '../images/instaimg.png'
import  {faInstagram,faInstalod,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Socail() {
  return (
    <div className='socail-list'>
      <div className='linkedin'>
        <a href='https://www.linkedin.com/in/srikar-mara-1263901b5/' >
          <img src={linkedimg} alt='' className='linkedin-img' ></img>
        </a>
        </div>
        <div className='insta'>
        {/* <a href='https://www.instagram.com/' >
          <img src={instaimg} alt='' className='insta-img' ></img>
        </a> */}
         <a href='https://www.instagram.com/marasrikar/'  target="_blank" >
        <FontAwesomeIcon icon={faInstagram} className='insta-img'></FontAwesomeIcon>
          {/* <img src={instaimg} alt='' className='insta-img' ></img> */}
        </a>
        {/* <FontAwesomeIcon icon={faInstagram} className='insta-img'></FontAwesomeIcon> */}
        </div>
        <div className='git'>
        <a href='https://github.com/srikar122' >
          <img src={gitimg} alt='linkedin' className='git-img' ></img>
        </a>
        </div>
  

        
    </div>
    
  )
}

export default Socail