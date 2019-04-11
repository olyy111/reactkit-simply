import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const ADD_LEG = 'ADD_LEG'
const DECREASE_LEG = 'DECREASE_LEG'
interface Action {
  type: string
}
export type LegState = {value: number}
function legReducer(state: any = {legNum: 0}, action: Action){
  console.log(state, action.type)
  switch(action.type) {
    case ADD_LEG:
      return {...state, legNum: state.legNum + 1}
    case DECREASE_LEG:
      return {...state, legNum: state.legNum - 1}
    default:
      return state
  }
}
const store = createStore(legReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
