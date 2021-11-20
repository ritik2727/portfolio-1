import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

const variants = {
   hidden: { x: 300 },
   visible: { x: 0 },
   speed: {
      yoyo: 3,

   }
}

export default function Content1() {
   return (
      <Container style={{ fontFamily: 'Ubuntu', color: 'white', top: '2em' }} >
         <Row style={{ width: '100%' }}>
            <Col xs={13} md={8}>
               <img src='https://static.wixstatic.com/media/2be1ce_864567900845418ebfd61e297637464d~mv2.gif' style={{ width: '80%' }} />
            </Col>
            <Col xs={6} md={4} >
               <motion.div variants={variants} initial="hidden" animate="visible" transition="delay">
                  <motion.h2 style={{ fontFamily: 'Praise', fontSize: '3em' }}   >What I Do?</motion.h2>
                  <h4   > Crazy Full Stack Mobile and Web Developer Who wants to explore every tech stack</h4>
                  <br></br>
                  <h6>Develop Highly Interactive Frontend/User Interface for your web and mobile application</h6>
                  <br></br>
                  <h6>Design User Interface for various applications and giving out best Experience</h6>
                  <br></br>
                  <h6>Integration of third party services such as firebase,stripe,MongoDB</h6>
               </motion.div>
            </Col>
         </Row>
      </Container >
   )
}
