import { Button } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllOrgAction } from '../../features/organization/OrganizationAction';

const Organization = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllOrgAction())
  }, [dispatch])

  return (
    <>
    <div>
      <h2>Organization</h2>
      <hr />

      <div className='text-end'>
        <Link to="/admin/new-org">
          <Button className='p-2' style={{background:"#5e1361ff", border:"none"}}><IoIosAddCircle /> Add Organization</Button>
        </Link>
      
      </div>
    </div>
    </>
  )
}

export default Organization