import React, { Component } from 'react';
import { Form, FormControl, Button, CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import styles from '../Search/Search.module.css';
import withApiRequests from '../HOC/withApiRequests';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Carousel from 'react-multi-carousel';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      searchResultsImage: [],
      searchResultObj: [],
      searchResultId: [],
      showTitle: false,
    }
  }

  getSearchResult = () => {
    this.props.getSearchMovie(this.state.inputValue)
      .then(response => {
        
        this.setState({searchResultsImage: response.results.map((items) => {
          return 'https://image.tmdb.org/t/p/w200'+items.poster_path
        })})

        this.setState({searchResultId: response.results.map((items) => {
          return items.id
        })})

        this.setState({searchResultObj: response.results.map((items) => {
          return items
        })})
        
        this.setState({showTitle: true})
      })
  }

  createImgFromSearch = () => {  
    let imgList = []
    
    // Outer loop to create parent
    for (let i = 0; i < 10; i++) {
    //Create the parent and add the listOfChildren
      imgList.push(  
        <CardDeck className={styles.card} key={i} >
          <Card.Img  src={this.state.searchResultsImage[i]}
            onClick={()=>{this.props.history.push('/movies/'+ this.state.searchResultId[i] ,this.state.searchResultObj[i])}}
          />
        </CardDeck>
      )
    }    
    return imgList;
  }

  render() {

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        partialVisibilityGutter: 40
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        partialVisibilityGutter: 30
      },
    };

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
        {this.state.showTitle && <h1 className={styles.searchHeader}>Your Search Result</h1>}
        <Carousel
              responsive={responsive}
              arrows={true}
              autoPlay
              autoPlaySpeed={2000}
              infinite
              draggable={false}
              partialVisible={true}
              >
              {this.createImgFromSearch()}
        </Carousel>
      </div>
    )
  }
}

export default compose(
  withApiRequests,
  withRouter,
)(Search)
