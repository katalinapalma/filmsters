import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card'

import Navigation from '../Navigation/Navigation';
import styles from '../FilmPage/FilmPage.module.css';

class FilmPage extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className={styles.movieContainer}>
          <div className={styles.divLeft}> 
            <Card style={{ width: '30rem' }}>
              <Card.Img variant="top" src="https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/280892/654b1c569a9a2b850e8d9c4de3bd8f02-Inception-movie-poster-7.jpg" />
            </Card>
          </div>
          <div className={styles.divRight}>
            <h1>Inception (2010)</h1>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default FilmPage;
