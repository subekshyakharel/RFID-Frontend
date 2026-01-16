import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleOrgAction } from "../../features/organization/OrganizationAction";
import { BsBuildingsFill } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { setModalContent, setModalShow } from "../../features/system/systemSlice";
import AddMemberForm from "../../component/forms/memberForm/AddMemberForm";

const OrgLandingPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleOrg } = useSelector((state) => state.orgInfo);
  useEffect(() => {
    dispatch(getSingleOrgAction(id));
  }, [dispatch, id]);

  const handleOnAddMembers = ()=>{
    dispatch(setModalContent({content: <AddMemberForm orgId={id}/>, title:"Add Members"}))
    dispatch(setModalShow(true));
  }

  return (
    <>
      <div className="d-flex justify-content-between rounded p-3 shadow">
        <div className="d-flex gap-3">
          <div>
            <BsBuildingsFill color="#ce1587ff" size={40} />
          </div>
          <div>
            <h2>{singleOrg.name}</h2>
            <span>Schema: {singleOrg.schema}</span> <br />
            <span>
              <AiOutlinePhone />: 980000000{" "}
            </span>
          </div>
        </div>

        <div>
          <Button
            style={{ background: "#c40e9c1f", border: "1px solid #c40e9dff" }}
            className="p-3 text-dark"
          >
            {" "}
            <MdOutlineModeEditOutline color="#c40e9dff" size={25} /> Edit
            Organization
          </Button>
        </div>
      </div>

      {/* <div className='d-flex gap-3'>
    <div className='d-flex gap-3 mt-4 rounded p-4 shadow'>
      <div>
        <FaPeopleGroup className='rounded' style={{background:"#e436a14d"}} size={45} color='#ce1587ff' />
      </div>
      <div>
        <h3>120</h3>
        <p>Members</p>
      </div>
    </div>
    <div className='mt-4 rounded p-3 shadow'>

    </div>
    <div className='mt-4 rounded p-3 shadow'>

    </div>
    <div className='mt-4 rounded p-3 shadow'>

    </div>
    </div> */}

      <div className="text-end mt-4">
        <Button onClick={handleOnAddMembers} style={{ background: "#c40e9dbd" }}>
          <IoAddCircle /> Add Members
        </Button>
      </div>
    </>
  );
};

export default OrgLandingPage;
