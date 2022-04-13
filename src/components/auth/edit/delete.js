import React, { useState } from 'react';
import UserService from '../../../services/users';
import { Navigate } from "react-router-dom"

function UsersDelete(props) {
    const password=props.password
    const [redirectToHome, setRedirectToHome] = useState(false);
    const deleteUser = async () => {
        if (window.confirm('Are you sure you wish to delete this account?')) {
            await UserService.delete(password)
            setRedirectToHome(true)
        }
    }

    if (redirectToHome == true)
        return <Navigate to="/" />;

    return (
        <p className='button is-danger' onClick={() => deleteUser()}>
            Delete Account
        </p>
    )
}

export default UsersDelete;