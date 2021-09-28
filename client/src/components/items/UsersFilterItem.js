import React, { useContext, useRef, useEffect } from 'react';
import AdminContext from '../../context/admin/adminContext';

const UsersFilterItem = () => {
    const adminContext = useContext(AdminContext);
    const text = useRef('');

    const { filterUsers, clearFilter, filtered } = adminContext;

    useEffect(() => {
       if(filtered === null) {
           text.current.value = '';
       }
    });

    const onChange = e => {
        if(text.current.value !== ''){
            // calls the filterUsers method
            filterUsers(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form className="filterform">
            <input ref={text} type="text" onChange={onChange} placeholder="Search by user"/>
        </form>
    )
}

export default UsersFilterItem;