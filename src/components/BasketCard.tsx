import React, {FC} from 'react';
import {Image} from "react-bootstrap";
import {ICard} from "./Card";


const BasketCard: FC<ICard> = ({title, img, price, count}) => {
    return (
        <div className="basket-card">
            <div className="column">
                <Image src={require(`../images/${img}.png`)}/>
                <span>-</span><span>{count}</span><span>+</span>
            </div>
            <div className="column">
                <h4>{title}</h4>
                <p style={{color: "grey"}}>{price}</p>
            </div>
        </div>
    );
};

export default BasketCard;