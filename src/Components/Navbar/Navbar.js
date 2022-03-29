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
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <ul className={`md:flex justify-center bg-indigo-300 w-full  absolute duration-500 ease-in md:static ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Nav
                        key={route.id}
                        route={route}></Nav>)
                }
            </ul>

        </nav>
    );
};

export default Navbar; 