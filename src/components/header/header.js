import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect';
export default function Header() {
   return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
         <Container>
            <Link to="main"></Link>
            <Navbar.Brand  > <h3 style={{ fontStyle: 'Praise' }}>Piyush Paradkar</h3> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" activeKey="/home">
               <Nav  >
                  <Nav.Link style={{ fontSize: '1.2rem' }} active><Link to="skills" smooth={true} duration={2000}>Skills</Link></Nav.Link>
                  <Nav.Link style={{ fontSize: '1.2rem' }} > <Link to="experience" smooth={true} duration={2000}>Experience</Link></Nav.Link>
                  <Nav.Link style={{ fontSize: '1.2rem' }}><Link to="contactus" smooth={true} duration={2000}>Contact Me</Link></Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container >
      </Navbar >

   )
}
