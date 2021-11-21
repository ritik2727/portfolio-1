import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect';
export default function Header() {
   return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
         <Container>
            <Link to="main"></Link>
            <Navbar.Brand  > <h3 style={{ fontStyle: 'Praise' }}>Piyush Paradkar</h3> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" activeKey="/home">
               <Nav>
                  <Nav.Link to="Skills" smooth={true} duration={2000} style={{ color: 'white' }}>Skills</Nav.Link>
                  <Nav.Link to="Experience" smooth={true} duration={2000} style={{ color: 'white' }}>Experience</Nav.Link>
                  <Nav.Link to="ContactMe" smooth={true} duration={2000} style={{ color: 'white' }}>Contact Me</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container >
      </Navbar >

   )
}
