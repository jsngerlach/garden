import React, { Component } from 'react';

class RegisterLogIn extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='col-xs-12 register-page'>
        <div className='col-sm-6 register-field'>
        <div className='col-xs-12 field-title'>Register</div>
          <input className='input-field' placeholder='Email Address' />
          <input className='input-field' placeholder='Password' type='password' />
          <input className='input-field' placeholder='Confirm Password' type='password' />
          <button className='field-btn'>Register</button>
        </div>
        <div className='col-sm-6 login-field'>
        <div className='col-xs-12 field-title'>Log In</div>
          <input className='input-field' placeholder='Email Address' />
          <input className='input-field' placeholder='Password' type='password' />
          <button className='field-btn login-btn'>Log In</button>
        </div>
      </div>
    )
  }
}

export default RegisterLogIn;
