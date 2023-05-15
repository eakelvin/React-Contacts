import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditContacts from './EditContacts';


function ContactList(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleDelete(event) {
        event.preventDefault()
        props.deleteUser(props.contact.id)
    }

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContacts contact={props.contact} editUser={props.editUser} closeUser={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    <Card className='mx-2 mb-2 bg-info' style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>Name :- {props.contact.name}</Card.Title>
        <Card.Subtitle>Number :- {props.contact.number}</Card.Subtitle>
        <Card.Text>Location :- {props.contact.location}</Card.Text>
        <Card.Link onClick={handleShow}>EDIT</Card.Link>
        <Card.Link>
            <Button variant="danger" onClick={handleDelete}>DELETE</Button>
        </Card.Link>
      </Card.Body>
    </Card>
    </>
  );
}

export default ContactList;
