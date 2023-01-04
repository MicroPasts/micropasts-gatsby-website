import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

const HelpYou = () => {
  return (
    <Row className="py-8 bg-purple">
      <Container >
        <Row>
          <Col md={12} lg={8} className="offset-lg-2 col-12 text-center">
            <span className="fs-4 text-white ls-md text-uppercase fw-semi-bold">Can we help you?</span>
            <h2 className="display-3 mt-4 mb-3 text-white fw-bold">Maybe you have a project that needs some citizen science power?</h2>
            <p className="lead text-white px-lg-8 mb-6">Get in touch, we might be able to help you with advice, the use of our platform, our code or maybe some consultancy. We're always willing to chat, and open to new ideas and collaborations. Our project
            is funded by the core team, so funded research is a high priority.</p>
            <Button variant={'outline-light'} href="mailto:info@micropasts.org">Contact us by email</Button>

          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default HelpYou;