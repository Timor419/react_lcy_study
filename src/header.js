import React, {Component} from 'react';
import "./header.css"
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className={"cp_header"}>
                <Link to={'/home'}>首页</Link>

                <Link to={'/comment'}>评论</Link>

                <Link to={'/goods'}>商品</Link>
            </div>
        );
    }
}

export default Header;
