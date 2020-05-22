import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import { FaHeart, FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";

import Navigation from '../Navigation/Navigation';
import styles from '../FilmPage/FilmPage.module.css';

class FilmPage extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.background}>
          <div className={styles.movieContainer}>
            <div className={styles.divLeft}> 
              <Card style={{ width: '30rem', marginTop: '50px'}}>
                <Card.Img variant="top" src="https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/280892/654b1c569a9a2b850e8d9c4de3bd8f02-Inception-movie-poster-7.jpg" />
              </Card>
            </div>
            <div className={styles.divRight}>
              <h1>Inception (2010)</h1>
              <IconContext.Provider value={{ style: { color: '#fff', fontSize: '40px', marginLeft: '100px', marginTop: '20px' } }}>
                <FaStar />
              </IconContext.Provider>
              <IconContext.Provider value={{ style: { color: '#fff', fontSize: '40px', marginLeft: '70px', marginTop: '20px' } }}>
                <FaHeart />
              </IconContext.Provider>
              <h3>Overview</h3>
              <div className={styles.overview}>
              <p>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. </p>
              <p>Director: Christopher Nolan</p>
              <p>Writer: Christopher Nolan</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.castH2}>Top Billed Cast</h2>
        <div className={styles.actors}>
          <Card style={{ width: '10rem', marginLeft: '50px', marginTop: '30px'}}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/c6/45/15/c645150f60a410c0896d731f98045b17.jpg" />
          </Card>
          <Card style={{ width: '10rem', marginLeft: '20px', marginTop: '30px' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/736x/f1/8a/f7/f18af71d558c6902e23e131ecfdb5c85.jpg" />
          </Card>
          <Card style={{ width: '10rem', marginLeft: '20px', marginTop: '30px' }}>
            <Card.Img variant="top" src="https://d1o2xrel38nv1n.cloudfront.net/files/2014/08/inception-la-premiere-2010-joseph-gordon-levitt-47818.jpg" />
          </Card>
        </div>
      </Fragment>
    )
  }
}

export default FilmPage;
