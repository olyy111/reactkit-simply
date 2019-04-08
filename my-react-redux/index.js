import React, { Component } from 'react';
import PropTypes from 'prop-types'
const StoreContext = React.createContext({});
export const connect = (mapStateToProps, mapDispatchToProps) => WrapComponent => {
  return class extends Component {
    static contextType = StoreContext;
    render() {
      const state = mapStateToProps(this.context.getState())
      return <WrapComponent {...state}></WrapComponent>
    } 
  }
}
export class Provider extends Component {
  render() {
    return <StoreContext.Provider value={this.props.store}>{this.props.children}</StoreContext.Provider>
  }
}
