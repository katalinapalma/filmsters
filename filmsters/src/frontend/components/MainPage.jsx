import React, { Component } from 'react';
import Search from './Search/Search';
import MainCarousel from './MainCarousel/MainCarousel';

 class MainPage extends Component {
  render() {
    return (
      <div>
        <Search />
        <MainCarousel />
      </div>
    )
  }
}

export default MainPage;
