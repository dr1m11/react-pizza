import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import './scss/app.scss'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NotFoundBlock from "./components/NotFoundBlock";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";

function App() {

    return (<div className="wrapper">
        <Header/>
        <div className="content">
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"*"} element={<NotFound/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
            </Routes>
        </div>
    </div>);
}

export default App;
