import React from 'react';
import "./css/Footer.css"
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="footer">
                <div><h1>QPICK</h1></div>
                <div>
                    <p>Избранное</p>
                    <p>Корзина</p>
                    <p>Контакты</p>
                </div>
                <div>
                    <p>Условия сервиса</p>
                    <div className="myrow">
                        <Image src={require("../images/Globus.png")}/>
                        <h3 style={{color: "gold"}}>Рус</h3>
                        <h3>Eng</h3>
                    </div>
                </div>
                <div className="myrow">
                    <Image className="socials" src={require("../images/VK.png")}/>
                    <Image className="socials" src={require("../images/Telegram.png")}/>
                    <Image className="socials" src={require("../images/Whatsapp.png")}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;