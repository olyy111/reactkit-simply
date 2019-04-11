import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {LegState} from './index'

class App extends Component<{legNum: number}> {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <span>鸡腿: {this.props.legNum}</span>
        <span>鸡腿操作台</span>
        <div>
          <button>加鸡腿</button><button>减鸡腿</button><button>2s后加鸡腿</button>
        </div>
      </div>
    );
  }
}

export default connect((state: LegState): LegState => state)(App);
