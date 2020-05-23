import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import styles from '../Search/Search.module.css';
import withApiRequests from '../HOC/withApiRequests';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      searchResults: [],
    }    
  }

  getSearchResult = () => {
    this.props.getSearchMovie(this.state.inputValue)
      .then(response => {
        console.log(response.results);
        this.setState({searchResults: response.results.map((items) => {
          console.log(items);
          this.props.history.push('/searchScreen/' + items);
        })})
      })
  }

  render() {
    return (
      <div>
        <div className={styles.headerImage}>
          <div className={styles.headerText}>
            <h1 className={styles.headerH1}>Welcome!</h1>
            <h4 className={styles.headerH4}>Search. Find. Review.</h4>
          </div>
          <div className={styles.searchBar}>
            <Form inline>
              <FormControl 
                type="text" 
                placeholder="Search for a movie!" 
                className="true" 
                size="lg" 
                style={{width: '500px'}} 
                value={this.state.inputValue}
                onChange={(event) => {
                  this.setState({inputValue: event.target.value})
                }}
              />
              <Button 
                type="submit" 
                size="lg" 
                variant="info"
                className={styles.searchBtn}
                onClick={(event) => {
                  this.getSearchResult();
                  event.preventDefault();
                }}
              >
                Search
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  withApiRequests,
  withRouter,
)(Search)
