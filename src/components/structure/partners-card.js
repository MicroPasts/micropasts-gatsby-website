import React from "react";
import { Link } from "gatsby"; // Import Gatsby's Link component
import { Card, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PartnersCard = ({ post }) => (
  <Col md={6} className="col-12" lg={4} xl={3}>
    <Link to={post.frontmatter.slug} style={{ textDecoration: "none" }}>
      <Card className="border-0 bg-light mb-2">
        <Card.Img variant={"top"}
                  as={GatsbyImage} image={getImage(post.frontmatter.image)} alt={"Object image"} />
        <Card.Body className="bg-white border-0 rounded-3">
          <Card.Title className={"fw-bold text-dark"}>{post.frontmatter.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  </Col>
);

export default PartnersCard;