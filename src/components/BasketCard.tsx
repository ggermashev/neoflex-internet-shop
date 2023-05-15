import React, {FC} from 'react';
import {Image} from "react-bootstrap";
import {ICard} from "./Card";
import "./css/BasketCard.css"
import {useDispatch} from "react-redux";
import {getLess, getMore, remove} from "../redux/buysSlice";
import {decrement} from "../redux/basketCounterSlice";


const BasketCard: FC<ICard> = ({id, title, img, price, count}) => {
    const dispatch = useDispatch()
    return (
        <div className="basket-card">
            <div className="column">
                <Image src={require(`../images/${img}.png`)}/>
                <div className="my-row amount">
                    <span className="change-amount" onClick={() => {
                        dispatch(getLess(id))
                    }}><span>-</span></span>
                    <span>{count}</span>
                    <span className="change-amount" onClick={() => {
                        dispatch(getMore(id))
                    }}><span>+</span></span>
                </div>
            </div>
            <div className="column">
                <h4>{title}</h4>
                <p style={{color: "grey"}}>{price} Р</p>
            </div>
            <Image className="delete-img" src={require("../images/Delete.png")} onClick={() => {
                dispatch(remove(id))
                dispatch(decrement())
            }}/>
            <h4 className="total-price">{price * count} Р</h4>
        </div>
    );
};

export default BasketCard;