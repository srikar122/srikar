import '../styles/Skills.css'
import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope,faDatabase } from '@fortawesome/free-solid-svg-icons'
import {faBootstrap,faReact,faHtml5,faCss3Alt,faPython,faJava,faJs,faNodeJs} from '@fortawesome/free-brands-svg-icons'
function Skills() {
  return (
    <div className='s'>
        <h1 className='s-heading'>Technologies</h1>
        <div className='s-wrapper'>
            <div className='s-left'>
                <div className='s-litem'>
                    <h2 className='s-h2'>Programming</h2>
                    <div className='images'>
                        <div className='s-group' tooltip="C programming">
                      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png' alt='' className='s-img'></img>
                      </div>
                      <div className='s-group' tooltip="C++">
                      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' alt='' className='s-img'></img>
                      </div>
                      <div className='s-group' tooltip="python"><FontAwesomeIcon icon={faPython} className='s-python'></FontAwesomeIcon></div>
                      <div className='s-group' tooltip="java"><FontAwesomeIcon icon={faJava} className='s-java'></FontAwesomeIcon></div>
                      <div className='s-group' tooltip="java script"><FontAwesomeIcon icon={faJs} className='s-js'></FontAwesomeIcon></div>                      
                    </div>
                </div>
                <div className='s-litem front'>
                    <h2 className='s-h2'>Front end</h2>
                    <div className='images'>
                      <div className='s-group' tooltip="HTML">
                       <FontAwesomeIcon icon={faHtml5} className=' s-icon s-html'></FontAwesomeIcon>
                        </div>
                      <div className='s-group' tooltip="CSS">
                          <FontAwesomeIcon icon={faCss3Alt} className=' s-icon s-css'></FontAwesomeIcon>
                      </div>
                      <div className='s-group' tooltip="Bootstrap">
                         <FontAwesomeIcon icon={faBootstrap} className='s-icon s-boot'></FontAwesomeIcon></div>
                      <div className='s-group' tooltip="React">
                          <FontAwesomeIcon icon={faReact} className=' s-icon s-react text-info'></FontAwesomeIcon></div>  
                    </div>
                </div>  
              </div>
        <div className='s-right'>
            <div className='s-ritem'>
                <h2 className='s-h2'>Backend</h2>
              <div className='r-images'>
                      
                <div className='s-group' tooltip="NodeJs">
                          <FontAwesomeIcon icon={faNodeJs} className=' s-icon s-nodejs'></FontAwesomeIcon>
                </div>  

                <div className='s-group' tooltip="ExpressJs">
                <img src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' alt='' className='s-img'></img>
                </div>  


              </div>
            </div>
            <div className='s-ritem'>
                <h2 className='s-h2'>Data bases</h2>
                <div className='r-images'>
                <div className='s-group' tooltip="SQL">
                    <FontAwesomeIcon icon={faDatabase} className=' s-icon s-database'></FontAwesomeIcon>
                </div>  
                <div className='s-group' tooltip="Mongo DB">
                  <img src='https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png' alt='' className='s-mongo'></img>      
                  </div> 
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills