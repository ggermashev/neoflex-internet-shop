import React from 'react';
import {IHeadphone} from "../types";
import Card from "../components/Card";
import {Col, Container, Row} from "react-bootstrap";
import "./css/Shop.css"
const Shop = () => {
    const headphones: IHeadphone[] = [
        {
            id: 1,
            img: "Image",
            title: "title1",
            price: 10,
            rate: 4.2,
        },
        {
            id: 2,
            img: "Image",
            title: "title2",
            price: 10,
            rate: 4.2,
        },
        {
            id: 3,
            img: "Image",
            title: "title3",
            price: 20,
            rate: 3.3,
        },
        {
            id: 4,
            img: "Image",
            title: "title4",
            price: 10,
            rate: 4.2,
        },
        {
            id: 5,
            img: "Image",
            title: "title5",
            price: 20,
            rate: 3.3,
        },
        {
            id: 6,
            img: "Image",
            title: "title6",
            price: 10,
            rate: 4.2,
        },
        {
            id: 7,
            img: "Image",
            title: "title7",
            price: 20,
            rate: 3.3,
        },
    ]
    return (
        <div className="shop">
            <h4 style={{color: "grey"}}>Наушники</h4>
            <Container fluid>
                <Row>
                    {headphones.map(h =>
                        <Col xs={12} sm={6} md={6} lg={4} className="col hp-card">
                            <Card count={0} id={h.id} img={h.img} price={h.price} rate={h.rate} title={h.title} key={h.id}/>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Shop;