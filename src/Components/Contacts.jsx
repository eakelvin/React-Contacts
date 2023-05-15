import React from 'react'
import ContactList from './ContactList'
import { Container, Row } from 'react-bootstrap'

function Contacts(props) {
    const contactList = props.contacts.map(contact => {
        return <ContactList 
                    contact={contact} 
                    key={contact.id}
                    deleteUser={props.deleteUser}
                    editUser={props.editUser}
                />
      })

  return (
    <Container className='p-3'>
        <Row>{contactList}</Row>
    </Container>
  )
}

export default Contacts

