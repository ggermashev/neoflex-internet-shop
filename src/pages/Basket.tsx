import React, {useMemo} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import BasketCard from "../components/BasketCard";
import {useSelector} from "react-redux";
import {ICard} from "../components/Card";
import "./css/Basket.css"

const Basket = () => {
    // @ts-ignore
    const buys = useSelector(state => state.buys.items)

    const summary = useMemo(() => {
        let res = 0;
        for (let b in buys) {
            res += buys[b].price * buys[b].count
        }
        return res;
    }, [buys])

    return (
        <div className="basket">
            <Container fluid>
                <Row>
                    <h4 style={{color: "grey"}}>Корзина</h4>
                    <Col xs={8} sm={8} className="column">
                        {buys.length > 0
                            ? <>
                                {buys.map((b: ICard) =>
                                    <BasketCard id={b.id} img={b.img} price={b.price} title={b.title} count={b.count}/>
                                )}
                            </>
                            : <>
                                <h1>Товары отсутствуют</h1>
                            </>
                        }
                    </Col>
                    <Col xs={4} sm={4}>
                        <div className="summary">
                            <div className="my-row">
                                <p>ИТОГО</p>
                                <p>Р {summary}</p>
                            </div>
                            <Button className="buy-btn btn">Перейти к оформлению</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Basket;