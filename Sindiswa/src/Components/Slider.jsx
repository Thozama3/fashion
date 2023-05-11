import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://assets.vogue.com/photos/616f075332e6aee08ea490e9/16:9/w_2580,c_limit/100_story.jpg"
          />
          <Carousel.Caption>
            <h3>South Africa Fashion week </h3>
            <p>Style is not a display of wealth but an expression of imagination</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.googleapis.com/afs-prod/media/c72c952813714029a75c98cbdce7eae1/3000.jpeg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Designers</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.vogue.com/photos/58917dd68c64075803ad09a1/master/w_2560%2Cc_limit/00-top-paris-collections-holding.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
        
            <h3>competition</h3>
            <p>
      
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Slider