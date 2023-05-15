import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function EditContacts(props) {
    const [dataForm, setDataForm] = useState({
        id: props.contact.id,
        name:props.contact.name,
        number:props.contact.number,
        location:props.contact.location
    })

    function handleChange(event){
        const {name, value} = event.target
        setDataForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        // setDataForm({[name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.editUser(dataForm.id, dataForm)
        setDataForm({
            name:"",
            number:"",
            location:""
        })
        props.closeUser()
    }

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" 
            name='name' value={dataForm.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formGridEmail">
          <Form.Label>Number</Form.Label>
          <Form.Control type="text" placeholder="Enter number" 
            name='number' value={dataForm.number} onChange={handleChange}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>location</Form.Label>
        <Form.Control placeholder="Location"
            name='location' value={dataForm.location} onChange={handleChange} />
      </Form.Group>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default EditContacts;