import React, { Component } from 'react'
import { Form, FormControl, Button, Col } from 'react-bootstrap';

class Search extends Component {
  render() {
    return (
        <div>
            <div className="headerImage">
              <h1 className="headerText">welcome</h1>
              <div className="searchBar">
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="true" size="lg" />
                  <Button size="lg" variant="outline-info">Search</Button>
                </Form>
              </div>
            </div>
        </div>
    )
  }
}

export default Search;
