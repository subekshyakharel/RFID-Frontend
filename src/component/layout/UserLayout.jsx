import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import AuthRoute from "../auth/AuthRoute";

const UserLayout = () => {
  return (
    <AuthRoute>
    <div className="layout-container">
      <div className="sidebar-container">
        <div className="p-4 mb-4 text-center">
          <h4 className="sidebar-title">Welcome Back! 👋</h4>
        </div>
        <Sidebar />
      </div>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
    </AuthRoute>
  );
};

export default UserLayout;
