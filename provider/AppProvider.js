import React, { Component } from 'react'

const AppContext = React.createContext();

export default class AppProvider extends Component {

  state = {
    user: "AUGIE"
  }

  setUser = (user) => {
    this.setState({user})
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          setUser: this.setUser
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export { AppProvider, AppContext };