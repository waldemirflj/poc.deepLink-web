import React from "react";
import PropTypes from "prop-types";
import { Col, Card, Button } from "react-bootstrap";

function Index({ id, title, description }) {
  return (
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Mais informações</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

Index.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Index;
