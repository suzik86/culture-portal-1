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

const architectShortArticle = ({ architect }) => (
  <Row>
    <Col>
      <Image src={architect.photo} alt={architect.name} width="150" rounded />
    </Col>
    <Col>
      <Row>
        <h3>{architect.name}</h3>
      </Row>
      <Row>
        <p>
          {cutArticle(architect.descriptionShort, 300)}
        </p>
      </Row>
    </Col>

  </Row>
);

export default architectShortArticle;
