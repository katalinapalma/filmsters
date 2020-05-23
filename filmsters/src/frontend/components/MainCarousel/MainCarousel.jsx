import React, { Component, Fragment } from 'react';
import styles from '../MainCarousel/MainCarousel.module.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { CardDeck, Card } from 'react-bootstrap';
import withApiRequests from '../HOC/withApiRequests';

 class MainCarousel extends Component {
   constructor(props){
     super(props);

     this.state = {
       apiImages: [],
       apiMovieTitle: '',
       apiObj: [],
     }
     console.log(this.state.apiImages);
     
   }

  componentDidMount(){
    this.getMovieObj();
  }

  getMovieObj = () => {
    this.props.getPopularMovies()
    .then(data => {
      console.log(data);
       this.setState({apiMovieTitle: data.results.map((items) => {
         console.log(items);
         return items.title
       })})

       this.setState({apiImages: data.results.map((items) => {
          fetch('https://image.tmdb.org/t/p/w200/' + items.poster_path)          
          .then(data => {
            console.log(items.poster_path)
            console.log('The movie poster ' + data);
          })
       })})
    })
  }

  getMoviePoster = () => {
    
  }

  createImgCarousel = () => {  
    let imgList = []
    console.log(this.state.apiImages);
    
    // const { classes } = this.props;

    // Outer loop to create parent
    for (let i = 0; i < 10; i++) {
    //Create the parent and add the listOfChildren
    //onClick={()=>{this.props.history.push('/recipescreen/'+ this.state.apiID[i], this.state.apiObj[i])}}
      imgList.push(  
        <CardDeck className={styles.card} key={i} >
          <Card.Img  src={this.state.apiImages[i]}/>
          
          <Card.Title className={styles.movieTitle}>
            {this.state.apiMovieTitle[i]}
          </Card.Title>
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
      <Fragment>
       <h1 className={styles.headerH1}>What's Popular</h1>
            <Carousel
              responsive={responsive}
              arrows={true}
              autoPlay
              autoPlaySpeed={2000}
              infinite
              draggable={false}
              partialVisible={true}
            >
              {this.createImgCarousel()}
          </Carousel>
      </Fragment>   
    )
  }
}

export default withApiRequests(MainCarousel);
