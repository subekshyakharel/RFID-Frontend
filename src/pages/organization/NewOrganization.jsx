import React from 'react'
import { Button, Form } from 'react-bootstrap'
import useForm from '../../component/hooks/useForm'
import { createOrgApi } from '../../features/organization/OrganizationApi'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name:"",
  email:"",
  schema_name:""
}

const NewOrganization = () => {
  const {form, setForm, handleOnChange} = useForm(initialState);
  const navigate = useNavigate();

  const handleOnSubmit = async(e)=>{
e.preventDefault();
if(!form.name || !form.email || !form.schema){
alert("All input must be provided");
}

const {message, org, status} = await createOrgApi(form);
console.log(message, org)
if(status===true){
  setForm(initialState)
  navigate("/admin/organization")
}
  }
  return (
    <>
    <div>
        <h3>New Organization</h3>
        <hr />
        
        <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control onChange={handleOnChange} name='name' type="text" placeholder="Enter company name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control onChange={handleOnChange} name='email' type="email" placeholder="example@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSchema">
        <Form.Label>Schema Name</Form.Label>
        <Form.Control onChange={handleOnChange} name='schema_name' type="text" placeholder="" />
      </Form.Group>
      <div className='d-grid'>
<Button className='p-2' style={{background:"#792b7aff", border:"none"}}  variant="primary" type="submit">
        Submit
      </Button>
      </div>
      
    </Form>
    </div>
    </>
  )
}

export default NewOrganization