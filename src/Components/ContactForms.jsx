import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function ContactForms(props) {
    const [dataForm, setDataForm] = useState({
        name:"",
        number:"",
        location:""
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
        props.newContact(dataForm)
        setDataForm({
            name:"",
            number:"",
            location:""
        })
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
          <Form.Control type="number" placeholder="Enter number" 
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

export default ContactForms;