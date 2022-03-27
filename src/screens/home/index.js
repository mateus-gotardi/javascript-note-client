import React from 'react';
import PresentationImage from '../../assets/images/presentation.png';
import Header from "../../components/header";
import '../../styles/home.scss'
import { Link, Navigate } from 'react-router-dom';
import '../../styles/auth.scss'


const Home = () => {
    if (localStorage.getItem('user')){
        return(
            <Navigate to="/notes" replace />
        )
    }
    return(
    <div className='homeGeneral'>
        <Header />
        <section className='home' >
            <div className="columns">
                <div className="column is-5 is-offset-1">
                    <h1 className="title is-2 is-spaced has-text-white">Create notes easily and access when you wants on the cloud</h1>
                    <h1 className='title is-5 is-spaced has-text-white'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br />
                    <br />
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</h1>
                    <Link to='/register' className="button is-outlined is-white is-large">
                        <strong>Register for free Now</strong>
                    </Link>
                </div>
                <div className="column is-6">
                    <img src={PresentationImage} alt=''/>
                </div>
            </div>
        </section>
    </div>
  
)}

export default Home;