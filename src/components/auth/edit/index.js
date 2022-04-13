import React, { Fragment, useState, useEffect } from "react";
import UserService from "../../../services/users";
import '../../../styles/user.scss'
import UsersDelete from "./delete";
import { Navigate } from "react-router-dom";


const EditUser = () => {
    var user = JSON.parse(localStorage.getItem('user'));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const [newPassword1, setNewPassword1] = useState('')
    const [newPassword2, setNewPassword2] = useState('')
    const [showNP, setShowNP] = useState(false)
    const [status, setStatus] = useState('')


    const initializeUser = async () => {
        setName(user['name']);
        setEmail(user['email']);
        return (user)
    }

    useEffect(() => {
        setStatus('false')
    }, [name, email, newPassword1, password])

    useEffect(() => {
        initializeUser()
    }, [])


    const deleteUser = async () => {
        if (window.confirm('Are you sure you wish to delete this account?')) {
            await UserService.delete(password)
            return (<Navigate to="/" />)
        }
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        if (!showNP) {
            try {
                await UserService.edit({ name: name, email: email, currentPassword: password, id: user._id })
                setStatus('success')
            } catch (error) {
                console.log(error)
                setStatus('error')
            }
        } else {
            if (newPassword1 === newPassword2) {
                try {
                    await UserService.edit({ name: name, email: email, currentPassword: password, id: user._id })
                    await UserService.updatePassword({
                        currentPassword: password, newPassword: newPassword1, id: user._id
                    })

                } catch (error) {
                    setStatus('error')
                }
            } else {
                setStatus('error2')
            }

        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label is-small">New Name:</label>
                    <div className="control">
                        <input className="input"

                            type="text"
                            name='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label is-small">New Email:</label>
                    <div className="control">
                        <input className="input"

                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                {showNP && <div className="field">
                    <label className="label is-small">New Password:</label>
                    <div className="control">
                        <input className="input"
                            autoComplete="off"
                            type="password"
                            required
                            name="newPassword"
                            value={newPassword1}
                            onChange={e => setNewPassword1(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label className="label is-small">Confirm New Password:</label>
                        <div className="control">
                            <input className="input"
                                type="password"
                                required
                                name="password"
                                value={newPassword2}
                                onChange={e => setNewPassword2(e.target.value)}
                            />
                        </div>
                        {status == 'error2' && <div id="errormessage"><span class="is-size-6" >Passwords don't match</span></div>}
                    </div>
                </div>}


                <div className="field">

                    <div className="changePassword">

                        <div className='inter'>
                            <label className='label is-small'>Current Password:</label>
                            <input required type='password' className='input' name='password' value={password}
                                onChange={e => { setpassword(e.target.value) }} />
                        </div>
                        <span onClick={e => {
                            if (showNP) { setShowNP(false) }
                            else { setShowNP(true) }
                        }}>
                            Change Password
                        </span>
                    </div>
                    {status == 'error' && <div id="errormessage"><span className="is-size-6" >Password invalid</span></div>}
                    {status == 'success' && <div id="successmessage"><span className="is-size-6" >Success</span></div>}

                </div>
                <div className="deletesave">
                        <button className='button is-custom-purple' type="submit">Save</button>
                        <UsersDelete password={password}/>
                </div>
            </form>
        </Fragment>
    )
}
export default EditUser