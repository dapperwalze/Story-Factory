import React, { Component } from 'react';
import { BiSearch } from "react-icons/bi";

const NavBar = (props) => {
    
    return (
        <div>
            <nav id="nav">
                <ul>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">ICO</a></li>
                    <li><a href="#"><BiSearch title={ "Search" } size={ "1.2em" }/></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;