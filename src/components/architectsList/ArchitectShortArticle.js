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
  <Row>
    <Col xs={12} md="auto">
      <a href="#architect" onClick={() => selectPersonHandler('person', index)}><Image src={architect.photo} alt={architect.name} width="200" rounded /></a>
    </Col>
    <Col xs={12} md={8}>
      <Row>
        <a href="#architect" onClick={() => selectPersonHandler('person', index)}><h3>{architect.name}</h3></a>
      </Row>
      <Row>
        <p>
          {cutArticle(architect.descriptionShort, 400)}
        </p>
      </Row>
    </Col>

  </Row>
);

export default architectShortArticle;
