import { useState } from 'react'
import './App.css'
import Contacts from './Components/Contacts'
import ContactForms from './Components/ContactForms'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <>
      <Container fluid className='p-3'>
        <Row>
          <Col> <ContactForms /> </Col>
          <Col sm={8}> <Contacts/> </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
