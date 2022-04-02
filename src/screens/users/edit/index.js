import React from 'react';
import HeaderLogged from '../../../components/header_logged';
import EditUser from '../../../components/auth/edit';
import logoImage from '../../../assets/images/logo.png'

const EditUserScreen = () => (
    <div className='editGeneral'>
    <HeaderLogged/>
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
                  <EditUser/>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default EditUserScreen;