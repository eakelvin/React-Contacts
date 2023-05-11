import { useState } from 'react'
import './App.css'
import Contacts from './Components/Contacts'
import ContactForms from './Components/ContactForms'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Visual",
      location: "Studio",
      number: "715-888-3521"
    },
    {
      id: 2,
      name: "Visual",
      location: "Studio",
      number: "715-888-3521"
    }

  ])

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }


  return (
    <>
      <Container fluid className='p-3'>
        <Row>
          <Col>
            <ContactForms newContact={addContact} />
          </Col>
          <Col sm={8}>
            <Contacts contacts={contacts} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
