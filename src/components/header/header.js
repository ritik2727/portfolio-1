import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
export default function Header() {
   return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
            <Navbar.Brand ><Typewriter
               options={{
                  strings: ['Piyush Paradkar'],
                  autoStart: true,
                  loop: true,
               }}
            /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" activeKey="/home">
               <Nav  >
                  <Nav.Link style={{ fontSize: '1.2rem' }} active>Skills</Nav.Link>
                  <Nav.Link style={{ fontSize: '1.2rem' }} > Work Experience</Nav.Link>
                  <Nav.Link style={{ fontSize: '1.2rem' }}>Contact Me</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container >
      </Navbar >

   )
}
