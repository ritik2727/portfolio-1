import React from 'react'
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content1 from './components/Content1/Content1';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import ContactMe from './components/Contact/ContactMe';
import { BrowserRouter, Route, Switch } from "react-router-dom"
function App() {
  return (
    <div style={{ backgroundColor: '#212529' }}>
      <BrowserRouter>
        <Header />
        <Content1 />
        <Experience />
        <Skills />
      </BrowserRouter>
    </div>
  );
}

export default App;
