import React, { Component } from 'react'

function withApiRequests(WrappedComponent) {
  return class extends Component{
    
    BASE_URL = "https://api.themoviedb.org/3";

    API_KEY = "?api_key=d9aff5f9a5b4555f51c3941e6b851d0a";

    fetchPopularMovies = () => {
      return fetch(this.BASE_URL + '/movie/popular' + this.API_KEY)
      .then(response => {
        return response.json();
      })
    }
    
    fetchSearchMovies = (searchValue) => {
      return fetch(this.BASE_URL + '/search/movie'+ this.API_KEY + '&query=' + searchValue)
      .then(response => {
        console.log(response);
        return response.json();
      })
    }

    render() {
      return(
        <WrappedComponent 
          getPopularMovies={this.fetchPopularMovies}
          getSearchMovie={this.fetchSearchMovies}
          {...this.props}
        />
      )
    }
  }
}

export default withApiRequests;
