import React, { Component } from 'react'
import Navigation from './Navigation'
import Search from './Search'

 class MainPage extends Component {
    render() {
      return (
        <div>
            <Navigation />
            <Search />
        </div>
    )
  }
}

export default MainPage;
