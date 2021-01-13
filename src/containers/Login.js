import React, { useState } from 'react';
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap"
import { Link, Redirect, useHistory} from 'react-router-dom';
import Input from '../components/form/Input';
import { login } from '../actions/authAction.js'
import { useDispatch, useSelector } from 'react-redux';
 
const Login = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState();
   const { isLoggedIn } = useSelector(state => state.auth);
   
   const onChangeEmail = (e) =>{
      const email = e.target.value;
      setEmail(email);
   }

   const onChangePassword = (e) =>{
      const password = e.target.value;
      setPassword(password);
   }

   const onFormSubmit = (e) =>{
      e.preventDefault();
      dispatch(login(email, password));
   }

   if (isLoggedIn) {
      history.push('/posts')
    }

       return (
           <Container>
               <Row>
                   <Col className="mx-auto" sm={ 11 } md={7} lg= {5}>
                       <Card className="my-4">
                           <Form className="p-sm-3 p-xs-1" onSubmit={onFormSubmit}>
                               <Card.Body>
                                   <Card.Title
                                       as="h3"
                                       className=" theme-color text-center mb-4 mt-2">
                                       Login
                                   </Card.Title>
                                       
                                       <Input
                                           name="email"
                                           type="email"
                                           value={email}
                                           placeholder="Enter Email"
                                           onChange={ onChangeEmail }
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
                                           onChange={ onChangePassword }
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
                                           Don't have an account? {" "}
                                           <Link to="/signup">Signup</Link>
                                       </Card.Text>
                               </Card.Body>     
                           </Form>
                       </Card>
                   </Col>
               </Row>
           </Container>
       )
   }

export default Login


