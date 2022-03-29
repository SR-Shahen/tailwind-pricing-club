import React from 'react';

const Nav = (props) => {
    const { name, link } = props.route;
    return (
        <nav>
            <li>
                <a href={link}>{name}</a>
            </li>
        </nav>
    );
};

export default Nav;