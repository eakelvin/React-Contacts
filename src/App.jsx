import { useState } from 'react'
import './App.css'
import Contacts from './Components/Contacts'
import ContactForms from './Components/ContactForms'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Default One",
      location: "Vite JSX",
      number: "715-888-3521"
    },
    {
      id: 2,
      name: "Default Two",
      location: "Yarn JSX",
      number: "715-888-3521"
    }

  ])

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const deleteUser = (id) => {
    setContacts([...contacts.filter((contact) => contact.id !== id)])
  }

  const editUser = (id, updatedContact) => {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === id){
          return updatedContact
        }
        else {
          return contact
        }
      })
    )
  }
  

  return (
    <>
      <Container fluid className='p-3'>
        <Row>
          <Col>
            <ContactForms newContact={addContact} />
          </Col>
          <Col sm={8}>
            <Contacts
              contacts={contacts} 
              deleteUser={deleteUser}
              editUser={editUser} 
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
