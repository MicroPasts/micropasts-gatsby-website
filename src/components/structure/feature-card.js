import React from "react";
import { Card, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const FeatureCard = ({ post }) => (
  <Col lg={4} md={6} className="d-flex align-items-stretch" key={post.id}>
    <Card className="border-0 mb-2">
      <a href={post.frontmatter.link}><Card.Img variant={"top"}
                as={GatsbyImage} image={getImage(post.frontmatter.image)}
                            alt={post.frontmatter.alt} /></a>
      <Card.Body>
        <Card.Title className={'fw-bold text-success'}>{post.frontmatter.title}</Card.Title>
        <Card.Text>{post.rawMarkdownBody}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export default FeatureCard;