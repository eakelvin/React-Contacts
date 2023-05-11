import React from 'react'
import ContactList from './ContactList'
import { Container, Row } from 'react-bootstrap'

function Contacts(props) {
    const contactList = props.contacts.map(item => {
        return <ContactList contact={item} key={item.id} />
      })

  return (
    <Container>
        <Row>{contactList}</Row>
    </Container>
  )
}

export default Contacts

