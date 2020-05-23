import React, { Component } from 'react'

class SearchScreen extends Component {
  constructor(props){
    super(props);
    console.log(this.props.location);

    this.state = {
      theMovies: this.props.location,
    }
    console.log(this.state.theMovies);
    
  }
  render() {
    return (
      <div>
        <h1>im SearchScreen</h1>
      </div>
    )
  }
}

export default SearchScreen;
