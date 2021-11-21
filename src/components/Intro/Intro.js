import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/24972-hi.json'
export default function Intro() {
   const [isStopped, setIsStopped] = useState(false)
   const [isPaused, setIsPaused] = useState(false)

   return (
      <div style={{ marginTop: '6em' }}>
         <Container style={{ fontFamily: 'Ubuntu', color: 'white' }} >
            <Row style={{}}>
               <Col xs={20} md={4} >
                  <h2 style={{ fontSize: '4em', fontFamily: 'Praise' }}>Hi !, I'm Piyush Paradkar</h2>
                  <br></br>
                  <h4 style={{ fontSize: '1.4em' }}>A passionate Full Stack Software Developer 🚀. I am having an experience of building Web applications with JavaScript / Reactjs / Nodejs /React Native and some other cool libraries and frameworks.</h4>
               </Col>
               <Col md={4}>
               </Col >
               <Col xs={12} md={4} >

               </Col>
            </Row>
         </Container >
      </div>
   )
}
