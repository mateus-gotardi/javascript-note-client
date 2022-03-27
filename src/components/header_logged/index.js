import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import logoImage from '../../assets/images/logo-white.png';
import '../../styles/header_logged.scss'
import { Link, Navigate } from 'react-router-dom';
import UserService from '../../services/users';
import { FaList } from "react-icons/fa";
import {IoClose} from 'react-icons/io5'



function HeaderLogged(props) {
    const [isLogged, setLogged] = useState(localStorage.getItem('user'))
    const [isActive, setActive] = useState(false);

    if (!isLogged) {
        return (
            <Navigate to={'/login'} />)
    }

    const handleToggle = () => {
        setActive(!isActive);
    };
    const handleLogout = async () => {
        await UserService.logout();
        setLogged(false)
    }
    return (
        <div className='externaldiv'>
            <nav id='logged' className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className='burg-icon' onClick={() => {
                        if (props.isOpen) {
                            props.setOpen(false)
                        } else {
                            props.setOpen(true)
                        }
                    }}>
                        {props.isOpen? <IoClose/> : <FaList />}
                    </a>

                    <Link className="navbar-item" to="/">
                        <img src={logoImage} width="112" height="28" alt='logo' />
                    </Link>
                    <a onClick={handleToggle} role="button" className={isActive ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded="false" id='nav-links'>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar-menu-logged" className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-start">
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={handleLogout} className="button is-small is-light" id='logout'>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderLogged