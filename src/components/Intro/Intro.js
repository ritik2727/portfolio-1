import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Lottie from 'react-lottie';

export default function Intro(props) {
   const { isDark } = props
   const [isStopped, setIsStopped] = useState(false)
   const [isPaused, setIsPaused] = useState(false)


   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../assets/24972-hi.json'),
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice'
      }
   };
   return (
      <div style={{ marginTop: '6em' }}>
         <Container style={{ fontFamily: 'Ubuntu', color: isDark ? "white" : "black " }} >
            <Row style={{}}>
               <Col xs={20} md={4} >
                  <h2 style={{ fontSize: '4em', fontFamily: 'Praise' }}>Hi !, I'm Piyush Paradkar</h2>
                  <br></br>
                  <h4 style={{ fontSize: '1.4em' }}>A passionate Full Stack Software Developer 🚀. I am having an experience of building Web applications with JavaScript / Reactjs / Nodejs /React Native and some other cool libraries and frameworks.</h4>
               </Col>
               <Col md={4}>
               </Col >
               <Col xs={12} md={4} >
                  <Lottie options={defaultOptions}
                     height={400}
                     width={400}
                     isStopped={isStopped}
                     isPaused={isPaused} />
               </Col>
            </Row>
         </Container >
      </div>
   )
}
