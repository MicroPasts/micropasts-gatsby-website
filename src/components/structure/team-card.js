import React from "react";
import { Card, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamCard = ({ post }) => (
  <Col md={6} className="col-12" lg={4} xl={3}>
    <Card className="border-0 bg-light">
      <Card.Img variant={"top"}
                as={GatsbyImage} image={getImage(post.frontmatter.image)} alt={"Object image"} />
      <Card.Body className="bg-white border-0 rounded-3">
        <Card.Title className={"fw-bold text-dark"}>{post.frontmatter.title} {post.frontmatter.name}</Card.Title>
        <Card.Subtitle className={"fw-bold text-dark"}>{post.frontmatter.institution}</Card.Subtitle>
      </Card.Body>
    </Card>
  </Col>
);

export default TeamCard;