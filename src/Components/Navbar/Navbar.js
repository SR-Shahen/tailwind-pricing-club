import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", link: "./home", },
        { id: 2, name: "Price", link: "./price", },
        { id: 3, name: "Deals", link: "./deals", },
        { id: 4, name: "Contact Us", link: "./contact us", },
    ]
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <ul className={`md:flex justify-center absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
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