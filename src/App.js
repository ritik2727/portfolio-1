import React from 'react'
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content1 from './components/Content1/Content1';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import ContactMe from './components/Contact/ContactMe';
import Intro from './components/Intro/Intro';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Row, Col, Container } from 'react-bootstrap'
function App() {
  return (
    <div style={{ backgroundColor: '#212529' }}>
      <BrowserRouter>
        <Header />
        <Intro />

        <Content1 />

        <h2 style={{ textAlign: 'center', marginTop: '3em', color: 'white', alignSelf: 'center', fontFamily: 'Praise', fontSize: '4em' }}>Skills And Abilities</h2>

        <Skills />
        <Experience />
        <ContactMe />
      </BrowserRouter >
    </div >
  );
}

export default App;
