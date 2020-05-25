import React, { Component } from 'react';

class SearchScreen extends Component {
  constructor(props){
    super(props);
    // console.log('props.location', this.props.location);

    this.state = {
      theMovies: this.props.location,
    }
    // console.log('results in search screen', this.state.theMovies); 
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
