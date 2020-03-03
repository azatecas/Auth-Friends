import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Nav = () => {

    const history = useHistory();
    const logOut = () => {
        window.localStorage.removeItem('token');
        history.push('/login');
    }
    
    

    return (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/friends">Friends</Link>
            
            {window.localStorage.getItem('token') !== null ?
                <button onClick={()=>{logOut()}}>LogOut</button> : <p> Hello Friend</p> 
                
                }
            
        </nav>
    )
}

export default Nav;