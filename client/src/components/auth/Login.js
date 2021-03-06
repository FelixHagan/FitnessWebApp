import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated, user } = authContext;

    // checks which type the user is and then sends to the correct page
    useEffect(() => {
        if (isAuthenticated && user !== null) {
            if (user.userType === "1"){
                props.history.push('/');
            } else if (user.userType === "2") {
                props.history.push('/adminUser');
            } else if (user.userType === "3") {
                props.history.push('/adminCoach');
            }
            
        } 

        if(error === 'Invalid Credentials') {
            setAlert(error);
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history, user]);

    const [theUser, setTheUser] = useState({
        email: "",
        password: ""
    })

    const { email, password } = theUser;

    // runs when user types in form
    const onChange = e => setTheUser({ ...theUser, [e.target.name]: e.target.value });

    // runs when user clicks login 
    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields');
        } else {
            login({
                email,
                password
            })
        }
    }

    return (
        <div className="workoutscontainer">
            <div className="formcontainer">
            <form onSubmit={onSubmit}>
            <h2>Login</h2>
            
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

            <input type="submit" value="Login" className="buttoncolour button"/>
        </form>
        </div>
        </div>
        
    )
}

export default Login