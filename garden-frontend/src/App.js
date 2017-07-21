import React, { Component } from 'react';
import MapHeader from './components/mapheader';
import ProfileHeader from './components/profileheader';
import ForumHeader from './components/forumheader';
import RegisterHeader from './components/registerheader';
import Map from './components/map';
import Profile from './components/profile';
import Forum from './components/forum';
import RegisterLogIn from './components/register';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.pageSelector = this.pageSelector.bind(this);

    this.state = {
      pageState: 'profile'
    }
  }

  pageSelector(e, value) {
    this.setState({pageState: value})
  }

  render() {
    let selectedPage
    let header

    switch(this.state.pageState) {
      case 'map':
        selectedPage = <Map />
        header = <MapHeader />
        break;
      case 'profile':
        selectedPage = <Profile />
        header = <ProfileHeader />
        break;
      case 'forum':
        selectedPage = <Forum />
        header = <ForumHeader />
        break;
      case 'register' :
        selectedPage = <RegisterLogIn />
        header =  <RegisterHeader />
        break;
    }

    return (
      <div>
        <div className='col-xs-12 nav-bar'>
          <div onClick={(e)=> {this.pageSelector(e, 'map')}} className={this.state.pageState == 'map' ? 'col-xs-3 nav-btn active' : 'col-xs-3 nav-btn'}>Map</div>
          <div onClick={(e)=> {this.pageSelector(e, 'profile')}} className={this.state.pageState == 'profile' ? 'col-xs-3 nav-btn active' : 'col-xs-3 nav-btn'}>Profile</div>
          <div onClick={(e)=> {this.pageSelector(e, 'forum')}} className={this.state.pageState == 'forum' ? 'col-xs-3 nav-btn active' : 'col-xs-3 nav-btn'}>Forum</div>
          <div onClick={(e)=> {this.pageSelector(e, 'register')}} className={this.state.pageState == 'register' ? 'col-xs-3 nav-btn active register-nav-btn' : 'col-xs-3 nav-btn register-nav-btn'}>Register / Log In</div>

          {/* Mobile buttons */}
          <div onClick={(e)=> {this.pageSelector(e, 'map')}} className={this.state.pageState == 'map' ? 'col-xs-12 mobile-nav-btn active' : 'col-xs-12 mobile-nav-btn'}>Map</div>
          <div onClick={(e)=> {this.pageSelector(e, 'profile')}} className={this.state.pageState == 'profile' ? 'col-xs-12 mobile-nav-btn active' : 'col-xs-12 mobile-nav-btn'}>Profile</div>
          <div onClick={(e)=> {this.pageSelector(e, 'forum')}} className={this.state.pageState == 'forum' ? 'col-xs-12 mobile-nav-btn active' : 'col-xs-12 mobile-nav-btn'}>Forum</div>
          <div onClick={(e)=> {this.pageSelector(e, 'register')}} className={this.state.pageState == 'register' ? 'col-xs-12 mobile-nav-btn active register-nav-btn' : 'col-xs-12 mobile-nav-btn register-nav-btn'}>Register / Log In</div>
        </div>
        {header}
        {selectedPage}
      </div>
    );
  }
}


export default App;
