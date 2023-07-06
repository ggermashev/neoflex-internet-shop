import React from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./css/Navigation.css"
import {useDispatch, useSelector} from "react-redux";

const Navigation = () => {
    // @ts-ignore
    const basket_counter = useSelector(state => state.basketCounter.count)
    const dispatch = useDispatch()
    return (
        <Navbar collapseOnSelect bg="white" variant="white" className="navigation">
            <Container>
                <Navbar.Brand as={Link} to={"/"} >QPICK</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={"/"}>
                            <Image className="like-img" src={require("../images/Like.png")}/>
                            <Image className="circle-img" src={require("../images/Circle.png")}/>
                            <span className="counter-like">1</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/basket"}>
                            <Image className="basket-img" src={require("../images/Basket.png")}/>
                            <Image className="circle-img" src={require("../images/Circle.png")}/>
                            <span className="counter-basket">{basket_counter}</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;