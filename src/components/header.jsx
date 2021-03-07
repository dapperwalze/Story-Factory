import React, { Component } from 'react';
import NavBar from './navBar';

const Header = (props) => {
    return (
        <header className="header">
            <section className="empty-header-section"></section>
            <section className="nav-header-section"><NavBar/></section>
        </header>
    )

}

export default Header;