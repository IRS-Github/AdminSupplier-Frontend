import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../common/navbar";
import Sidebar from "../common/Sidebar";
const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  return userInfo?.userName ? (
    <div className="h-screen w-screen flex flex-col  ">
      <Navbar />
      <div className="flex h-screen ">
        <div className=" w-auto overflow-hidden ">
          <Sidebar />
        </div>
        <div className="grow ">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
