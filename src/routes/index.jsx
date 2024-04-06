import React, { useEffect, useState, useContext } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Login from "../feature/login/Login";
import Home from "../feature/Home/Home";
import { DataContext } from "../components/contexts";
import SignUp from "../feature/login/SignUp";


const MapperRouter = () => {
    const { auth } = useContext(DataContext)
    const [authCheck, setAuthCheck] = useState(false);
    useEffect(() => {
        if (auth)
            setAuthCheck(true)
    }, [auth])

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
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<RequireAuth />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>

        </div>
    )
}


export default MapperRouter;