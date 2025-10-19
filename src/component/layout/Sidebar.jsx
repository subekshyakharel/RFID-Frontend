import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loginAdminApi, logoutAdminApi } from "../../features/admin/AdminApi";
import { useDispatch } from "react-redux";
import { setAdmin } from "../../features/admin/AdminSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
    const handleOnLogout =async ()=>{
      //call api to logout from backend
      loginAdminApi();

      dispatch(setAdmin({}))
    }
  return (
    <div>
      <Stack gap={3}>
        <div className="sidebar-item">
            <Link to="/admin" className="nav-link">
            Dashboard
            </Link>
            </div>

        <div className="sidebar-item">
            <Link to="/admin/organization" className="nav-link">
            Organizations
            </Link>
            </div>

        <div className="sidebar-item">
            <Link to="/admin/org-admins" className="nav-link">
            Organization Admins
            </Link>
            </div>

        <div className="sidebar-item">
            <Link to="/admin/settings" className="nav-link">
            Settings
            </Link>
            </div>

        <div className="sidebar-item">
            <div onClick={handleOnLogout} className="nav-link">
            Logout
            </div>
            </div>
      </Stack>
    </div>
  );
};

export default Sidebar;
