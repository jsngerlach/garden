import React, { Component } from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div className='col-xs-12 user-info-container'>
          <div className='col-sm-2 col-xs-12'>
            <div className='col-sm-12 col-xs-8 avatar'></div>
            <div className='col-sm-12 col-xs-4 name'>Buzz Lightyear</div>
          </div>
          <div className='col-sm-10 col-xs-12 bio-container'>
            <div className='col-xs-12 profile-info-title'>Bio:</div>
            <i className='edit-btn fa fa-pencil' aria-hidden='true' />
            <div className='col-xs-12 bio'>My name is Buzz and I love to garden. I have my own personal garden and sell food at the local farmers market every tuesday. To infinity and beyond. I grow a lot of carrots and would be willing to trade to make a stew. Meet me at the farmers market or message me on here. Happy Gardening</div>
          </div>
        </div>
        <div className='col-xs-12'>
          <div className='col-sm-10 user-garden-container'>
            <div className='col-xs-12 garden-gallery'>
              Images
            </div>
            <div className='col-xs-12 garden-info-title'>
              Description:
            </div>
            <div className='col-xs-12 garden-info'>
              Rose Garden with ten different types of roses and twenty rose plants (two of each).
            </div>
          </div>
          <div className='col-sm-2'>
            Add new garden to profile
          </div>

        </div>
      </div>
    )
  }
}

export default Profile;
