import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import uuidv1 from 'uniqid';

const CarouselCustom = ({ gallery }) => {

  const imageForCarousel = gallery.map(item => (
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
      {imagesForCarousel}
    </Carousel>
  );
};

export default CarouselCustom;
