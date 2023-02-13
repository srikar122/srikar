import Main from './components/main'
import About from './components/About'
import Contact from './components/Contact.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,Route,Routes} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import './App.css';
import Navi from './components/Navi.js'
import {useState, useEffect} from 'react'
import {useRef} from 'react'
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './App.css'
function App() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (

    <div className="App">
      		<Navbar  collapseOnSelect expand="lg" style={{"padding-top":0,"padding-bottom":0,}}>
		<Container>
		  <Navbar.Brand href="#home" style={{"font-size":30,"color":"white","font-family":" 'Rancho', cursive"}}>
			{/* <p className='link-text-head'>Srikar Mara</p> */}
			Srikar Mara
		  </Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="me-auto"> 
			  <Nav.Link href="#pricing"></Nav.Link> 
			</Nav>
			<Nav>
			<Nav.Link eventKey={2} href="home" className="link-text" style={{"font-size":30,"margin-right":25,"padding":0}}>
			  {/* <p className='link-text-content'>Home</p>   */}
			  Home
			   </Nav.Link> 
			  <Nav.Link href="about" className="link-text" style={{"font-size":30,"padding-left":"10","margin-right":25,"padding":0}}>
				{/* <p className='link-text-content'>About</p> */}
				About
				</Nav.Link>
 			  <Nav.Link eventKey={2} href="skills" className="link-text" style={{"font-size":30,"margin-right":25,"padding":0}}>
				{/* <p className='link-text-content'>Skills</p> */}
				Skills
			  </Nav.Link> 
  
			  <Nav.Link eventKey={2} href="projects" className="link-text" style={{"font-size":30,"margin-right":25,"padding":0}}> 
				{/* <p className='link-text-content'>Projects</p> */}
				Projects
			  </Nav.Link>
			  <Nav.Link eventKey={2} href="contact" className="link-text" style={{"font-size":30,"margin-right":25,"padding":0}}>
			   
				{/* <p className='link-text-content'>Contact Me</p> */}
				Contact
			  </Nav.Link>
			</Nav>
		  </Navbar.Collapse>
		</Container>
	  </Navbar>
    <Routes>
      <Route path='' element={<Main/>}/>
      <Route path='home' element={<Main/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
      

	<div className='footer'>
			<hr className='footer-hr'/>
			<p className='footer-content'>
				A portfolio by Srikar❤️
			</p> 
		</div>
    </div>
  );
}

export default App;
