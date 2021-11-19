import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect';
export default function Header() {
   return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
            <Link to="main"></Link>
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
                  <Nav.Link style={{ fontSize: '1.2rem' }} active><Link to="skills">Skills</Link></Nav.Link>
                  <Nav.Link style={{ fontSize: '1.2rem' }} > <Link to="experience">Experience</Link></Nav.Link>
                  <Nav.Link style={{ fontSize: '1.2rem' }}><Link to="contactus">Contact Me</Link></Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container >
      </Navbar >

   )
}
