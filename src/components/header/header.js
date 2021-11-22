import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import DarkModeToggle from "react-dark-mode-toggle";
export default function Header(props) {
   const { isDark } = props;
   const [isDarkMode, setIsDarkMode] = useState(isDark);
   return (

      <Navbar collapseOnSelect expand="lg" bg={isDark ? "#171C28" : "light"} >
         <Container>
            <Link to="main"></Link>
            <Navbar.Brand  > <h3 style={{ fontStyle: 'Praise', color: isDark ? 'white' : 'black' }}>Piyush Paradkar</h3> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" activeKey="/home">
               <Nav>
                  <Nav.Link to="Skills" smooth={true} duration={2000} style={{ color: isDark ? 'white' : 'black' }}>Skills</Nav.Link>
                  <Nav.Link to="Experience" smooth={true} duration={2000} style={{ color: isDark ? 'white' : 'black' }}>Experience</Nav.Link>
                  <Nav.Link to="ContactMe" smooth={true} duration={2000} style={{ color: isDark ? 'white' : 'black' }}>Contact Me</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container >
         <DarkModeToggle
            checked={isDarkMode}
            size={80}
            onChange={() => { setIsDarkMode(isDark ? false : true); props.parentCallback(isDark ? false : true) }}
         />
      </Navbar >

   )
}
