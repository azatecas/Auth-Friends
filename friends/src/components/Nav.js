import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/friends">Friends</Link>
        </nav>
    )
}

export default Nav;