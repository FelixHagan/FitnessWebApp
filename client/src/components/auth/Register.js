import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Register = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { register, error, clearErrors, isAuthenticated } = authContext;

    const { setAlert } = alertContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if(error === 'User already exists') {
            setAlert(error);
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('The passwords do not match')
        } else {
            register({
                name,
                email,
                password
            })
        }
    }

    return (
        <div className="workoutscontainer">
            <div className="formcontainer">
            <form onSubmit={onSubmit}>
            <h2>Register</h2>
            
            <div className="labelinputcontainer">
            <label htmlFor='name'>Name:</label>
            <input 
                type='text'
                placeholder='Name'
                name='name'
                id='name'
                value={name}
                onChange={onChange}
                required
                />
            </div>
    
            <div className="labelinputcontainer">
            <label htmlFor='email'>Email:</label>
            <input 
                type='email'
                placeholder='Email'
                name='email'
                id='email'
                value={email}
                onChange={onChange}
                required
                />
            </div>

            <div className="labelinputcontainer">
            <label htmlFor='password'>Password:</label>
            <input 
                type='password'
                placeholder='Password'
                name='password'
                id='password'
                value={password}
                onChange={onChange}
                required
                minLength="6"
                />
            </div>
    
            <div className="labelinputcontainer">
            <label htmlFor='password2'>Confirm Password:</label>
            <input 
                type='password'
                placeholder='Confirm Password'
                name='password2'
                id='password2'
                value={password2}
                onChange={onChange}
                required
                minLength="6"
                />
            </div>

            <input type="submit" value="Register" className="buttoncolour button"/>
        </form>
        </div>
        </div>
        
    )
}

export default Register
