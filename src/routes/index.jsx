import React, { useEffect, useState, useContext } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Login from "../feature/login/Login";
import Home from "../feature/Home/Home";


const MapperRouter = () => {
    const [authCheck, setAuthCheck] = useState(false);
    // useEffect(()=>{
    //  if(auth)
    //  setAuthCheck(true)
    // },[auth])

    const RequireAuth = () => {
        if (!authCheck) { return <Navigate to={'/login'} replace={true} />; }
        return (
            <>
                <Outlet />
            </>
        )
    }
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<RequireAuth />} />
                <Route path="/home" element={<Home />} />
            </Routes>

        </div>
    )
}


export default MapperRouter;