import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Content1() {
   return (
      <Container >
         <Row style={{ width: '100%' }}>
            <Col xs={13} md={8}>
               Hello EverOne
            </Col>
            <Col xs={6} md={4}>
               <h3 style={{ fontFamily: 'Ubuntu', color: 'white' }}>HERE IMahe</h3>HERE IMahe
            </Col>
         </Row>
      </Container>
   )
}
