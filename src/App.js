import React from 'react'
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content1 from './components/Content1/Content1';

import { BrowserRouter, Route, Switch } from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
