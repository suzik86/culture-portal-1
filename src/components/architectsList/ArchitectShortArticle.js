import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const cutArticle = (article, maxLength) => {
  if (article.length > maxLength) {
    return `${article.slice(0, maxLength)} ...`;
  }
  return article;
};

const architectShortArticle = ({ architect, index, selectPersonHandler }) => (
  <Row className="architect-block">
    <Col xs={12} md="auto" className="col-md text-center">
      <a href="#architect" onClick={() => selectPersonHandler('person', index)}><Image className="architect-photo" src={architect.photo} alt={architect.name} width="200" rounded /></a>
    </Col>
    <Col xs={12} md={9}>
      <Row>
        <a href="#architect" onClick={() => selectPersonHandler('person', index)}><h4>{architect.name}</h4></a>
      </Row>
      <Row>
        <p>
          {cutArticle(architect.descriptionShort, 500)}
        </p>
      </Row>
    </Col>

  </Row>
);

export default architectShortArticle;
