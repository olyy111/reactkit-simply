import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types'
const StoreContext = React.createContext({});
export const connect = (mapStateToProps?: (state: object) => object, mapDispatchToProps?: object) => WrapComponent => {
  return class extends Component {
    static contextType = StoreContext;
    render() {
      const state = mapStateToProps(this.context.getState())
      return <WrapComponent {...state}></WrapComponent>
    } 
  }
}

interface ProviderProps {
  store?: any
}

export class Provider extends Component<ProviderProps, any> {
  render() {
    return <StoreContext.Provider value={this.props.store}>{this.props.children}</StoreContext.Provider>
  }
}