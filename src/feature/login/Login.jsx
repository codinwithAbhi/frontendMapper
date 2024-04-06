import React, { useContext, useEffect, useState } from "react";
import {
    Row,
    Col,
    Form,
    Image,
    Container,
    Button,
    InputGroup,
    Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { loginImg, homeImg } from "../../assests";
import "./Login.css";

import { login } from "../../services/auth.service";
import { DataContext } from "../../components/contexts";


function Login() {
    const navigate = useNavigate();
    const {auth,setAuth} = useContext(DataContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const payload = {
                email: data.email,
                password: data.password,
            };
            const response = await login(payload);

            if (response.status === 200) {
                localStorage.setItem('access-token', JSON.stringify(response?.data));
                setAuth(true);
            }
        } catch (error) {
            console.error('Login failed:', error.message);
            setIsLoading(false);
        }
    };
   
useEffect(()=>{
if(auth){
    navigate('/home')
}
},[auth])


    return (
        <Row className="h-100 m-0">
            <Col md={6} className="p-0">
                <Image src={loginImg} fluid className="login-image" />
            </Col>
            <Col md={6} className="justify-content-center align-items-center">
                <div className="mt-5">

                    <Row className="mt-3 justify-content-center">
                        <Col md={9}>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mt-4" controlId="formBasicEmail">
                                    <Form.Label>
                                        Email ID<span className="required">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        size="lg"
                                        className="login-form-control"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is required",
                                            },
                                            pattern: {
                                                value: /^\S+@\S+\.\S+$/,
                                                message: "Invalid Email",
                                            },
                                        })}
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                    />
                                    <Form.Text
                                        type="invalid"
                                        className={`text-danger text-center size-1`}
                                    >
                                        {errors.email && errors.email.message}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mt-3" controlId="formBasicPassword">
                                    <Form.Label>
                                        Password<span className="required">*</span>
                                    </Form.Label>
                                    <InputGroup className="position-relative">
                                        <Form.Control
                                            size="lg"
                                            className="login-form-control"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "Password is required",
                                                },
                                            })}
                                            name="password"
                                            type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                                            placeholder="Password"
                                        />
                                        <Button
                                            variant="light"
                                            size="sm"
                                            className="password-toggle-btn position-absolute end-0"
                                            style={{ height: "100%" }}
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </Button>
                                    </InputGroup>
                                    <Form.Text
                                        type="invalid"
                                        className={`text-danger text-center size-1`}
                                    >
                                        {errors.password && errors.password.message}
                                    </Form.Text>
                                </Form.Group>

                                <div className="mt-3 text-end">
                                    <Link to={"/signup"} style={{textDecoration:"none"}}>Create Account!</Link>
                                </div>

                                <div className="text-center mt-4">
                                    <Button
                                        className="w-100 text-center"
                                        variant="primary"
                                        type="submit"
                                        // size="lg"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <Spinner></Spinner> : "Login"}
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default Login;
