import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ContactList(props) {
  return (
    
    <Card className='mx-2 bg-info' style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>Name :- {props.contact.name}</Card.Title>
        <Card.Subtitle>Number :- {props.contact.number}</Card.Subtitle>
        <Card.Text>Location :- {props.contact.location}</Card.Text>
        <Card.Link href="#">EDIT</Card.Link>
        <Card.Link href="#">DELETE</Card.Link>
      </Card.Body>
    </Card>
    
  );
}

export default ContactList;