import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Body/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
