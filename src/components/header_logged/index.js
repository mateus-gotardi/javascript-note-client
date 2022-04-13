import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import logoImage from '../../assets/images/logo-white.png';
import '../../styles/logged_header.scss'
import { Link, Navigate } from 'react-router-dom';
import UserService from '../../services/users';
import { FaList } from "react-icons/fa";
import { IoClose } from 'react-icons/io5'
import { HiLogout } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'

function HeaderLogged(props) {
    const user=JSON.parse(localStorage.getItem('user'));
    const [isNotes, setIsNotes] = useState(props.isOpen != null)
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
                    {isNotes ? <a className='burg-icon' onClick={() => {
                        if (props.isOpen) {
                            props.setOpen(false)
                        } else {
                            props.setOpen(true)
                        }
                    }}>
                        {props.isOpen ? <IoClose /> : <FaList />}
                    </a> : <></>}

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
                        {isActive ?
                            <div className="navbar-item burg-container" >
                                {isNotes ?
                                    <Link to={'/users/edit'} className="navbar-item burg-item">
                                        <CgProfile className='icon-burg' />Edit User
                                    </Link> :
                                    <Link to={'/notes'} className="navbar-item burg-item">
                                        <FaList className='icon-burg' />Notes
                                    </Link>
                                }
                                <a className="navbar-item burg-item" onClick={handleLogout}>
                                    <HiLogout className='icon' />Logout
                                </a>
                            </div>
                            :
                            <div className="navbar-item has-dropdown is-hoverable" id='dropArea'>
                                <a className="navbar-link">
                                    <CgProfile className='iconRight' />
                                </a>

                                <div className="navbar-dropdown is-right" id='dd'>
                                    {isNotes ?
                                        <Link to={'/users/edit'} className="navbar-item dd">
                                            <CgProfile className='iconDD' />{user.name}
                                        </Link> :
                                        <Link to={'/notes'} className="navbar-item dd">
                                            <FaList className='iconDD' />Notes
                                        </Link>
                                    }
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item dd" onClick={handleLogout}>
                                        <HiLogout className='iconDD' />Logout
                                    </a>
                                </div>
                            </div>}
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default HeaderLogged