import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BasketCard from "../components/BasketCard";
import {useSelector} from "react-redux";

const Basket = () => {
    // @ts-ignore
    const buys = useSelector(state => state.buys.items)
    return (
        <div>
            <Container fluid>

                <Row>
                    <Col xs={8} sm={8}>
                        <BasketCard id={} img={} price={} rate={} title={} count={}
                    </Col>
                    <Col xs={4} sm={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Basket;