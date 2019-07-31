import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function CarouselArchitector(props) {
  const { gallery } = props;

  const imageForCarousel = Object.values(gallery).map(function (item) {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item}
          alt="First slide"
        />
      </Carousel.Item>
    )
  })

  return (
    <Carousel>
      {imageForCarousel}
    </Carousel>
  )
}

export default CarouselArchitector;
