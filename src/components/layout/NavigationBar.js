import React, { useState } from 'react';
import { Navbar, Button, Nav, } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../assets/code-slash.svg'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/authAction';

const NavigationBar = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    const auth = isLoggedIn;

    const onClickLogout = (e)=>{
        e.preventDefault();
        dispatch(logout());
    }

    // if (!isLoggedIn) {
    //     return <Redirect to="/login" />;
    //   }
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ minHeight: "4rem"}}>
            <Link to="/posts">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />
                        {' '} Tech Blog
                </Navbar.Brand>
            </Link>
                <Nav className="ml-auto">
               
                    {
                        auth ? (
                            
                                <Button className="mr-sm-4" 
                                        variant="light" 
                                        onClick={onClickLogout}> Logout </Button>
                            
                        ) : (
                            <Link to="/login">
                                <Button className="mr-sm-4" 
                                        variant="light"> LogIn </Button>
                            </Link>
                        )}
                </Nav>
        </Navbar>
    )
}

NavigationBar.protoTypes = {
    auth: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default NavigationBar
