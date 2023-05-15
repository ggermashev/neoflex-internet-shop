import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navigation/>
            <main>
                <Routes>
                    <Route path={"/"} element={<Shop/>}/>
                    <Route path={"/basket"} element={<Basket/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
