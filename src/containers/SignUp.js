import React, { useState } from 'react'
import { Card, Button, Container, Row, Col, Alert, Form } from "react-bootstrap"
import { Link } from 'react-router-dom';
import Input from '../components/form/Input';

const SignUp = () => {
const [username, setUsername] = useState(" ");
const [email, setemail] = useState("")
const [password, setPassword] = useState()
const onChangeUsername = () =>{

}

const onChangeEmail = () =>{

}
    return (
        <Container>
            <Row>
                <Col className="mx-auto" sm={ 11 } md={7} lg= {5}>
                    <Card className="my-4">
                        <Form className="p-sm-3 p-xs-1">
                            <Card.Body>
                                <Card.Title
                                    as="h3"
                                    className=" theme-color text-center mb-4 mt-2"
                                >
                                    Signup
                                    </Card.Title>

                                    <Input
                                        name="user_name"
                                        type="text"
                                        value={username}
                                        placeholder="Enter Username"
                                        text={{
                                            module: "SignUp",
                                            label:"Username",
                                            
                                        }}
                                        />

                                    <Input
                                        name="email"
                                        type="email"
                                        value={email}
                                        placeholder="Enter Email"
                                        text={{
                                            module: "login",
                                            label:"Email",
                                            
                                        }}
                                        />
                                    
                                    <Input
                                        name="password"
                                        type="password"
                                        value={password}
                                        placeholder="Enter Password"
                                        text={{
                                            module: "login",
                                            label:"Password",
                                            
                                        }}
                                        />

                                    <Button variant="info" 
                                            type="submit"
                                            className="mt-3">
                                        Submit
                                    </Button>

                                    <Card.Text className="mt-2">
                                        Already have an account? {" "}
                                        <Link to="/login">Login</Link>
                                    </Card.Text>
                            </Card.Body>     
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp
