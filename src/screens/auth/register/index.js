import React from 'react';
import Header from '../../../components/header';
import logoImage from '../../../assets/images/logo.png'
import RegisterForm from '../../../components/auth/register_form';
import { Navigate } from 'react-router-dom';

const RegisterScreen = () => {
  if (localStorage.getItem('user')){
    return(
        <Navigate to="/notes" replace />
    )
}
  return(
  <div className='authGeneral'>
    <Header/>
      <div className='container'>
        <div className="columns is-centered" id='formcontent'>
          <div className="column is-5" id='box'>
            <div className="card">
              <div className="card-content">
                <section className='section' id='sec'>
                  <div className="inter">
                    <div className="column is-12">
                      <img alt='logo' src={logoImage}/>
                    </div>
                  </div>
                  <div className="inter">
                    <div className="column is-12">
                      <h1 className="title is-6 has-text-grey has-text-centered">Your notes on the clouds</h1>
                    </div>
                  </div>
                  <RegisterForm/>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )};

export default RegisterScreen;