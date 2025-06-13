import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyInfo() {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="text-danger">Đậu Đoàn Hoàn Thiện</h1>
          <p className="lead">
            Xin chào! Mình là một lập trình viên React, yêu thích học hỏi và khám phá những công nghệ mới nhaaaaa.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyInfo;
