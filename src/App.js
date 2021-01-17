import React, { Component } from 'react'
// import Chat from './pages/chat';
import Home from './pages/home';
export default class App extends Component {
  focusH = () => {
    let body = document.documentElement.clientHeight || document.body.clientHeight
    let App = document.getElementsByClassName('App')[0]
    App.style.height = body + 'px'
  }
  componentDidMount() {
    this.focusH()
    window.addEventListener('resize', () => {
      this.focusH()
    })
  }
  render() {
    return (
      <div className="App">
        {/* <Chat /> */}
        <Home />
      </div>
    )
  }
}
