import React, { useState } from "react";
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
// import { authServices } from "../../services";
// import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
// import { setItemInLocalStorage } from "../../utility";


function Login() {
    const navigation = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    //   const { login, setUserResponsibilities, setLoading } = useAuth();
    const onSubmit = (data) => {
        const payload = {
            email: data.email,
            password: data.password,
        };
        // validateUser(payload);
    };

    const validateUser = async (payload) => {
        try {
            setIsLoading(true);
            //   const response = await authServices.login(payload);
            //   if (response.status === 200) {
            //     const decoded = jwtDecode(response.data.data.token);
            //     setItemInLocalStorage("user", JSON.stringify(decoded));
            //     setItemInLocalStorage("user_token", response.data.data.token);
            //     if (instance === "SHORE") {
            //       login("SHORE");
            //       setUserResponsibilities(response.data.data.responsibilities);
            //       localStorage.setItem("initial_popup", true);
            //       navigation("/shore/dashboard");
            //     } else if (instance === "VESSEL") {
            //       login("VESSEL");
            //       navigation("/vessel/dashboard");
            //     }
            //   }
        } catch (error) {
            console.error(error);
            toast.error(`Failed to Login`);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <Row className="h-100 m-0">
            <Col md={6} className="p-0">
                <Image src={loginImg} fluid className="login-image" />
            </Col>
            <Col md={6} className="justify-content-center align-items-center">
                <div className="mt-5">
                    {/* <Row className="justify-content-center">
                        <Col md={9} className="text-start">
                           <Image
                src={homeImg}
                fluid
                style={{ width: "80%", position: "relative", right: "28px" }}
              /> 
                            <h6 className="text-start">Finde Your Shop</h6>

                        </Col>
                    </Row> */}
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
                                    <Link to={"singup"} style={{textDecoration:"none"}}>Create Account!</Link>
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
