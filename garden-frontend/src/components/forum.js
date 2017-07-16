import React, { Component } from 'react';

class Forum extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='col-xs-12'>
        <textarea className='col-xs-offset-3 col-xs-6 forum-area' placeholder='Enter your question or comment here' />
        <button className='field-btn forum-btn'>Post</button>
      </div>
    )
  }
}

export default Forum;
