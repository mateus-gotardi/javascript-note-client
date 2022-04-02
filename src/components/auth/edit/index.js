import React, { Fragment, useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom"
import UserService from "../../../services/users";
import '../../../styles/user.scss'


const EditUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [newPassword, setNewPassword] = useState('')
    const [showNP, setShowNP] = useState(false)
    const [status, setStatus]= useState(false)

    const initializeUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'));
        setName(user['name']);
        setEmail(user['email']);
        return (user)
    }

    useEffect(()=>{
        setStatus(false)
    },[name,email,newPassword])
    useEffect(() => {
        initializeUser()
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        if (!showNP) {
            try {
                await UserService.edit({ name: name, email: email, password: password })
                setStatus(true)
            } catch (error) {
                setError(true)
            }
        } else {
            try {
                await UserService.edit({ name: name, email: email, password: password })
                await UserService.password({password:password, newPassword:newPassword, email:email})
                setStatus(true)
            } catch (error) {
                setError(true)
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
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        />
                    </div>
                </div>}
                <div className="field">
                    <label className="label is-small">Confirm Password:</label>
                    <div className="control">
                        <input className="input"

                            type="password"
                            required
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    {error && <div id="errormessage"><span class="is-size-6" >Password invalid</span></div>}
                    {status && <div id="successmessage"><span class="is-size-6" >Success</span></div>}
                    <div className="changePassword"><span onClick={e => setShowNP(true)}>Change Password</span></div>
                    <div className="control" id='buttons'>
                        <Link to='/login' className="button is-danger" id="login">Delete Account</Link>
                        <button className='button is-custom-purple' type="submit">Save</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}
export default EditUser