import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import uniqid from 'uniqid';


const CarouselCustom = ({ gallery }) => {
  const imageForCarousel = Object.values(gallery).map(item => (
    <Carousel.Item key={uniqid()}>
      <img
        className="d-block w-100"
        src={item}
        alt="First slide"
      />
    </Carousel.Item>
  ));

  return (
    <Carousel>
      {imageForCarousel}
    </Carousel>
  );
};

export default CarouselCustom;
