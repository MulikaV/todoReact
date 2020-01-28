import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./pages/About";

function App() {
    return (
        <div>
            <Navbar/>
            <div className="container pt-4">
                <Route path={"/"} exact component={Home}/>
                <Route path={"/about"} component={About}/>
            </div>
        </div>
    );
}

export default App;
