import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Image from './Image';

function SimpleCard({ item }) {
  return (
    <Card className="shadow-sm" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Row className="g-0">
        <Col md={4}>
          <div style={{ height: '120px', padding: '10px' }}>
            <Image imageUrl={item.imageUrl} alt={item.title} />
          </div>
        </Col>
        <Col md={8}>
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title className="h5 mb-2">{item.title}</Card.Title>
            <Card.Text className="text-muted">{item.description}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default SimpleCard;
