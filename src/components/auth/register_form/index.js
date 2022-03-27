import React, { Fragment, useState } from "react";
import { Navigate, Link } from "react-router-dom"
import UserService from "../../../services/users";



const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const user = await UserService.register({ name: name, email:email,password:password})
            setRedirectToLogin(true)
        } catch (error) {
            setError(true)
        }
    }

    if (redirectToLogin) {
        return <Navigate to="/login" replace />
    }
    
    return (
        <Fragment>
            <form>
                <div className="field">
                    <label className="label is-small">Name:</label>
                    <div className="control">
                        <input className="input"
                            type="text"
                            required
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label is-small">Email:</label>
                    <div className="control">
                        <input className="input"
                            type="email"
                            required
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label is-small">Password:</label>
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
                    {error && <div id="errormessage"><span class="is-size-6" >Email or Password invalid</span></div>}
                    <div className="control" id='buttons'>
                        <Link to='/login' className="button is-white has-text-custom-purple" id="login">Login</Link>
                        <button className='button is-custom-purple' onClick={HandleSubmit}>Register</button>
                    </div>
                   
                    
                </div>
            </form>
        </Fragment>
    )
}
export default RegisterForm