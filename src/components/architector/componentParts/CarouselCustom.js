import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import uniqid from 'uniqid';

const CarouselCustom = ({ photoGallery, gallery }) => {
  const imagesForCarousel = gallery.map(item => (
    <Carousel.Item key={uniqid()}>
      <img
        className="d-block w-100 img-carousel"
        src={item}
        alt="First slide"
      />
    </Carousel.Item>
  ));

  return (
    <>
      <h4>{photoGallery}</h4>
      <Carousel fade>
        {imagesForCarousel}
      </Carousel>
    </>
  );
};

export default CarouselCustom;
