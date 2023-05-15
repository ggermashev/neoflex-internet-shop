import React, {FC} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import "./css/Card.css"
import {useDispatch} from "react-redux";
import {increment} from "../redux/basketCounterSlice";

export interface ICard {
    id: number,
    img: string,
    price: number,
    rate: number,
    title: string,
    count: number
}

const Card: FC<ICard> = ({id, img, price, title, rate}) => {
    const dispatch = useDispatch()
    return (
        <div className="card">
            <Container>
                <Row>
                    <Col xs={12} sm={12} className="col">
                        <Image src={require(`../images/${img}.png`)}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} sm={6} className="col left-align">
                        <h4>{title}</h4>
                    </Col>
                    <Col xs={6} sm={6} className="col right-align">
                        <h4 className="price">{price} Р</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} sm={6} className="col left-align">
                        <h4><Image className="star" src={require("../images/Star.png")}/>{rate}</h4>
                    </Col>
                    <Col xs={6} sm={6} className="col right-align">
                        <h4 className="buy" onClick={() => {
                            if (localStorage.getItem('buys')) {
                                const products = JSON.parse(localStorage.getItem('buys') as string)
                                const titles = products.map((p: { title: string }) => {
                                    return p.title
                                })
                                if (!titles.includes(title)) {
                                    localStorage.setItem('buys', JSON.stringify([...products,
                                        {id: id, img: img, price: price, title: title, count: 1}]))
                                    dispatch(increment())
                                } else {
                                    alert("Товар уже приобретен. Вы можете увеличить его кол-во в корзине")
                                }
                            } else {
                                localStorage.setItem('buys', JSON.stringify([{
                                    id: id,
                                    img: img,
                                    price: price,
                                    title: title,
                                    count: 1
                                }]))
                                dispatch(increment())
                            }
                        }}>Купить</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Card;