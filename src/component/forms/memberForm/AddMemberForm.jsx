import React from 'react'
import CustomInput from '../../customInput/CustomInput'
import { Button, Form } from 'react-bootstrap'
import useForm from '../../hooks/useForm'
import { createNewMemberApi } from '../../../features/member/MemberApi'

const memberInput = [
    {
        label:"Name",
        type:"text",
        placeholder:"Enter your full name",
        required:true,
        name:"name"
    },
    {
        label:"Email",
        type:"email",
        placeholder:"example@gmail.com",
        required:true,
        name:"email"
    },
    {
        label:"Role",
        type:"text",
        placeholder:"role",
        required:true,
        name:"role"
    },
    {
        label:"Phone",
        type:"number",
        placeholder:"98xxxxxxxxx",
        required:true,
        name:"phone"
    },
    {
        label:"Department",
        type:"text",
        placeholder:"98xxxxxxxxx",
        required:true,
        name:"department"
    },
]

const AddMemberForm = ({orgId}) => {
    const {handleOnChange, form} = useForm()

    const handleOnSubmit = async(e)=>{
        e.preventDefault()
        // console.log(form)
        const memberData = {
            ...form, 
            org_id: orgId
        }
console.log(memberData)
        const result = await createNewMemberApi(memberData, orgId);
    }
  return (
    <div>
        <Form onSubmit={handleOnSubmit} className='p-2'>
        {
            memberInput.map((input, index)=> <CustomInput key={index} onChange={handleOnChange} {...input}/> )
        }
        <div className="d-grid">
            <Button variant='dark' type='submit'>Submit</Button>
        </div>
        
        </Form>
       
    </div>
  )
}

export default AddMemberForm