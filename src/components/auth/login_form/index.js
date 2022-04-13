import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom"
import UserService from "../../../services/users";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToNotes, setRedirectToNotes]=useState(false)
    const [error, setError] = useState(false);

    const HandleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const user = await UserService.login({ email:email,password:password})
            setRedirectToNotes(true)
        } catch (error) {
            setError(true)
        }
    }

    if (redirectToRegister) {
        return <Navigate to="/register"/>
    } else if (redirectToNotes){
        return <Navigate to="/notes"/>
    }
    
    return (
        <Fragment>
            <form onSubmit={HandleSubmit}>
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
                    {error && <div id="errormessage"><span className="is-size-6" >Email or Password invalid</span></div>}
                    <div className="control" id='buttons'>
                        <button type="submit" className="button is-custom-purple" id="login">Login</button>
                        <button onClick={e=>{ setRedirectToRegister(true)}} className='button is-white has-text-custom-purple'>Register</button>
                    </div>
                   
                    
                </div>
            </form>
        </Fragment>
    )
}
export default LoginForm