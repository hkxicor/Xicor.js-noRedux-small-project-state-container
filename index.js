//Xicor.js Implementation

import React, { Component } from 'react'

class AppState extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.mutateState = this.mutateState.bind(this)
  }
  mutateState(newState, callback) {
    this.setState(newState, () => {
      if(this.props.debug){
        console.log('App State Mutate: ',JSON.stringify(this.state));
      }
      if(callback){
        callback()
      }
    })
  }
  render(){
    const { children } = this.props
    return (
      <div className="AppState">
        {
          React.Children.map(children, child => {
            return React.cloneElement(child, {
              appState: this.state,
              mutateState: this.mutateState
            })
          })
        }
      </div>
    )
  }
}

export default AppState
