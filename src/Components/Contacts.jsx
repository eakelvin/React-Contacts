import React from 'react'
import ContactList from './ContactList'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Contacts() {
  const users = useSelector(state => state.users)

    const contactList = users.map(contact => {
        return <ContactList
                    key={contact.id} 
                    contact={contact} 
                />
      })

  return (
    <Container className='p-3'>
        <Row>{contactList}</Row>
    </Container>
  )
}

export default Contacts

