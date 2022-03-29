import React from 'react';
import Nav from '../Nav/Nav';

const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", link: "./home", },
        { id: 2, name: "Price", link: "./price", },
        { id: 3, name: "Deals", link: "./deals", },
        { id: 4, name: "Contact Us", link: "./contact us", },
    ]
    return (
        <nav>
            <ul>
                {
                    routes.map(route => <Nav route={route}></Nav>)
                }
            </ul>
        </nav>
    );
};

export default Navbar; <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <a href=""></a></ul>