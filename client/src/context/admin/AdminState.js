import React, { useReducer } from 'react';
import axios from 'axios';
import AdminContext from './adminContext';
import adminReducer from './adminReducer';
import {
    GET_USERS,
    CLEAR_USERS,
    USERS_ERROR,
    DELETE_USER
} from '../types';

const AdminState = props => {
    const initialState = {
        loading: true,
        users: [],
        error: null
    }

    const [state, dispatch] = useReducer(adminReducer, initialState);

    // Load Users
    const loadUsers = async () => {
        try {
            const res = await axios.get('/api/users');

            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: USERS_ERROR,
                payload: err.response.msg
            })
        }
    }

    // Clear Users
    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        })
    }

    // Remove User 
    const removeUser = async id => {
        try {
            await axios.delete(`/api/users/${id}`)

            dispatch({ type: DELETE_USER, payload: id });
        } catch (err) {
            dispatch({
                type: USERS_ERROR,
                payload: err.response.msg
            })
        }
        
    }

    return (
        <AdminContext.Provider
        value={{
            loading: state.loading,
            users: state.users,
            error: state.error,
            loadUsers,
            clearUsers,
            removeUser
        }}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;