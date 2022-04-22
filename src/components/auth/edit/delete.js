import React, { useState } from 'react';
import UserService from '../../../services/users';
import { Navigate } from "react-router-dom"

function UsersDelete(props) {
    const {password, email}=props
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [error, setError]=useState(null)
    const checkpassword = async () =>{
        try {
            const checkPass = await UserService.checkPassword({ email:email,password:password})
            console.log(checkPass)
            const status = localStorage.getItem('status')
            if (status){
                deleteUser()
                localStorage.removeItem('status', null);
            }
        } catch (error) {
            setError(true)
        }
    }
    
    const deleteUser = async () => {
        if (window.confirm('Are you sure you wish to delete this account?')) {
            await UserService.delete()
            setRedirectToHome(true)
        }
    }

    if (redirectToHome == true)
        return <Navigate to="/" />;

    return (
        <p className='button is-danger' onClick={() => checkpassword()}>
            Delete Account
        </p>
    )
}

export default UsersDelete;