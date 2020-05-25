import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import { FaHeart, FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'; 
import { Button } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

import Rating from './Rating';

import styles from '../FilmPage/FilmPage.module.css';

class FilmPage extends Component {
  constructor(props){
    super(props);
    console.log(this.props.location);
    

    this.state = {
      movieObj: this.props.location.state,
    }
  }

  render() {
    return (
      <Fragment>
        <div className={styles.background}>
          <div className={styles.movieContainer}>
            <div className={styles.divLeft}> 
              <Card style={{ width: '30rem', marginTop: '50px'}}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w200'+this.state.movieObj.poster_path} />
              </Card>
            </div>
            <div className={styles.divRight}>
              <h1><strong>{this.state.movieObj.title}</strong> ({this.state.movieObj.release_date})</h1> 
              <h4 className={styles.ratings}>Rating: <strong>{this.state.movieObj.vote_average}</strong></h4>
              <div className={styles.ratingStars}>
                <Rating />
              </div>
              <h3>Overview</h3>
              <div className={styles.overview}>
                <p>{this.state.movieObj.overview}</p>
              </div>
              <IconContext.Provider value={{ style: { color: '#fff', fontSize: '40px', marginLeft: '100px', marginTop: '50px' } }}>
                <FaHeart />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <h2 className={styles.titlesH2}>Top Billed Cast</h2>
        <div className={styles.actors}>
          <Card style={{ width: '10rem', marginLeft: '50px', marginTop: '30px'}}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/c6/45/15/c645150f60a410c0896d731f98045b17.jpg" />
            <Card.Title>Leonardo DiCaprio</Card.Title>
          </Card>
          <Card style={{ width: '10rem', marginLeft: '20px', marginTop: '30px' }}>
            <Card.Img variant="top" src="https://www1.pictures.zimbio.com/bg/Denzel+Washington+Book+Eli+Premiere+eD3BK98r9tTl.jpg" />
            <Card.Title>Denzel Washington</Card.Title>
          </Card>
          <Card style={{ width: '10rem', marginLeft: '20px', marginTop: '30px' }}>
            <Card.Img variant="top" src="https://www.thesun.co.uk/wp-content/uploads/2019/02/NINTCHDBPICT000376325994.jpg" />
            <Card.Title>Tom Hardy</Card.Title>
          </Card>
          <Card style={{ width: '10rem', marginLeft: '20px', marginTop: '30px' }}>
            <Card.Img variant="top" src="https://d1o2xrel38nv1n.cloudfront.net/files/2014/08/inception-la-premiere-2010-joseph-gordon-levitt-47818.jpg" />
            <Card.Title>Joseph Gordon-Levitt</Card.Title>
          </Card>
          <Card style={{ width: '10rem', marginLeft: '20px', marginTop: '30px' }}>
            <Card.Img variant="top" src="https://divasanddorks.com/wp-content/uploads/2013/03/angela-bassett-premiere-olympus-has-fallen-02.jpg" />
            <Card.Title>Angela Bassett</Card.Title>
          </Card>
          <Card style={{ width: '10rem', marginLeft: '20px', marginTop: '30px' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/cd/76/78/cd767801cff9cd419af568a18ff11a6a.jpg" />
            <Card.Title>Ed Westwick</Card.Title>
          </Card>
        </div>
        <h2 className={styles.titlesH2}>Reviews</h2>
        <div className={styles.reviewz}>
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        <Tab eventKey="home" title="Reviews">
          <Card style={{ 
            width: '50%', 
            marginTop: '30px', 
            marginBottom: '100px', 
            padding: '20px', 
            backgroundColor: '#1f2225',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
          }}>
            <Card.Body>
              <h3 className={styles.reviewName}>Written by: Name</h3>
              <hr />
              <Card.Text className={styles.reviews}>
                When I first saw the trailer for this film, I knew that this would attract a lot of attention. 
                Of course having Leonardo in the lead role helped a lot.
                From the trailer, I already know some things. Dreams. All about dreams. But what about dreams? Who 
                are the other people? At first, I didn't really understand what was going on. It was all very confusing
                to me. But as the movie progresses, I start to understand it and I wanted to watch some more and know 
                more what will happen in the end. The ending. That was, I think, the most intense ending of a movie in 
                a year or probably more than a year. People actually screamed when the screen faded. And of course, 
                people couldn't help but talk about it. It was an open-ended movie where people will have their own endings. 
                My favorite part was Joseph Gordon's fight scene. I think he has the most fun part in this movie.
                My rate for this movie is A.
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="profile" title="Your Review">  
          <Card style={{ 
            width: '50%', 
            height: '750px', 
            marginTop: '30px', 
            marginBottom: '100px', 
            padding: '20px', 
            backgroundColor: '#1f2225',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
          }}>
            <Card.Body>
            <label className={styles.labelsReviews}>Movie Title:</label>
              <h3 className={styles.titleH3}>{this.state.movieObj.title}</h3>
              
              <label className={styles.labelsReviews}>Name:</label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <label className={styles.labelsReviews}>Your review:</label>
              <textarea className={styles.textareaReviews}></textarea>
              <Button variant="info"  size="lg">Submit</Button>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
        </div>
      </Fragment>
    )
  }
}

export default FilmPage;


