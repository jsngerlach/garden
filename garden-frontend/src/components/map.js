import React, { Component } from 'react';

class Map extends React.Component {
  constructor(props){
    super(props)

    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount(){
    this.renderMap()
  }
  renderMap(){
      //Map code here need to figure out importing map in react
  }

  render(){
    return(
      <div>
        Map
      </div>
    )
  }
}

export default Map;
