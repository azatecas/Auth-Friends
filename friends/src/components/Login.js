import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom'



export const Login = () => {

    const [credentials, setCredentials ] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    const handleChange = e => {
        setCredentials({
            credentials: {
                ...credentials.credentials,
                [e.target.name]: e.target.value
            }

        })
    }
    let history = useHistory();
    const login = e => {
        e.preventDefault();
        
        axiosWithAuth()
            .post('/api/login', credentials.credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload);
                history.push('/Friends')
            })
            .catch (err => console.log('error Login', err))
    }

    return(
        <form className="login" onSubmit={login}>
            <label>Username</label>
            <input 
                type="text"
                name="username"
                value={credentials.credentials.username}
                onChange={handleChange}
                placeholder="username"
            />
            <label>password</label>
            <input 
                type="password"
                name="password"
                value={credentials.credentials.password}
                onChange={handleChange}
                placeholder="password"
            />
            <button>Login</button>
        </form>
    )
}