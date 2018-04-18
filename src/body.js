import React, {Component} from 'react';
import './body.css';
import Comment from "./comment";
import Home from "./home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Goods from "./goods";

class Body extends Component {
    render() {
        return (
            <div className={'cp_body'}>
                <Switch>
                    {/*首页*/}
                    <Route exact path={['/', '/home']} component={Home}/>

                    {/*评论*/}
                    <Route exact path={'/comment'} component={Comment}/>

                    {/*商品*/}
                    <Route exact path={'/goods'} component={Goods}/>

                </Switch>
            </div>
        );
    }
}

export default Body;