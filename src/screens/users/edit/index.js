import React, { useState } from 'react';
import HeaderLogged from '../../../components/header_logged';
import EditUser from '../../../components/auth/edit';
import logoImage from '../../../assets/images/logo.png'
import LoginForm from '../../../components/auth/login_form';
//import '../../../styles/editScreen.scss'

const EditUserScreen = () => {


  return (
    <div className='editGeneral'>
      <HeaderLogged />
      <div className='container'>
        <div className='columns'>
          <div className="column is-8 is-offset-2" id='box'>
            <div className="card">
              <div className="card-content">
                <section className='section' id='sec'>
                  <div className="inter">
                    <div className="column is-12">
                      <img alt='logo' src={logoImage} />
                    </div>
                  </div>
                  <div className="inter">
                    <div className="column is-12">
                      <h1 className="title is-6 has-text-grey has-text-centered">Your notes on the clouds</h1>
                    </div>
                  </div>
                  <EditUser />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EditUserScreen;