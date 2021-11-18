import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Content1() {
   return (
      <Container style={{ backgroundColor: 'black' }} >
         <Row style={{ width: '100%' }}>
            <Col xs={13} md={8}>
               Hello EverOne
            </Col>
            <Col xs={6} md={4}>
               HERE IMahe
            </Col>
         </Row>
      </Container>
   )
}
