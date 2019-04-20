import React, { Component } from 'react';
import {HomeComponent} from './home/home.component.js';
import NavigationBarComponent from './navigation/navigation.bar.component.js';
import {TopFooter} from './footer/top.footer.js'
import {BottomFooter} from './footer/bottom.footer.js';
import './App.css';

class App extends Component {
  render() {
    var user = {
      userName : 'bhushanp',
      firstName: 'Bhushan',
      lastName: 'Patil',
      lastLoginTime: '04/18/2019 12:04:20',
      hobbies: ['Cricket', 'Reading', 'Watching Movie']
    }

    return (
      <div className="App AppHeader">
        <div className="row">
          <div className="col-lg-12 TopFooter">
            <TopFooter user={user}></TopFooter>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 NavigationBar">
            <NavigationBarComponent user={user}></NavigationBarComponent>
          </div>
          <div className="col-lg-10 HomeComponent">
            <HomeComponent message={'Hello World'} user={user}></HomeComponent>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 BottomFooter">
            <BottomFooter user={user}>
              <p>New India Software Private Ltd., Pune - 411033</p>
            </BottomFooter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
