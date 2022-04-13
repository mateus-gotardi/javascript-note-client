import React, {useState} from 'react';
import 'bulma/css/bulma.min.css';
import logoImage from '../../assets/images/logo.png';
import '../../styles/header.scss'
import { Link } from 'react-router-dom';

function Header(){
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

    return(
    <div className='externaldiv'>
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
            <img src={logoImage} width="112" height="28" alt='logo'/>
            </Link>
            <a onClick={handleToggle} role="button" className={isActive ? "navbar-burger is-active":"navbar-burger burgicon"} aria-label="menu" aria-expanded="false" id='nav-links'>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbar-menu" className={isActive? "navbar-menu is-active": "navbar-menu"}>
            <div className="navbar-start">
            </div>

            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                <Link to='/register' className="button is-small is-custom-purple">
                    <strong>Sign up</strong>
                </Link>
                <Link to='/login' className="button is-small is-light">
                    Log in
                </Link>
                </div>
            </div>
            </div>
        </div>
        </nav>
    </div>
)}

export default Header