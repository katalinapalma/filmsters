import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import styles from '../Search/Search.module.css';

class Search extends Component {
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
              <FormControl type="text" placeholder="Search" className="true" size="lg" style={{width: '500px'}} />
              <Button size="lg" variant="info" className={styles.searchBtn}>Search</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
