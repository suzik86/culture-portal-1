import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import uuidv1 from 'uniqid';


const CarouselCustom = ({ gallery }) => {
  const imagesForCarousel = Object.values(gallery).map(item => (
  // TODO сменить объект на массив
  // const imagesForCarousel = gallery.map(item => (
    <Carousel.Item key={uuidv1()}>
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
