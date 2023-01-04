import React from "react";
import {Container, Button, Col} from "react-bootstrap";
import { withPrefix } from 'gatsby';
const FeaturedProject = () => {
  return (
    <Container fluid className="bg-white py-3 mb-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', minHeight: '600px',backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
     backgroundImage: `url(${withPrefix('/50691296886_2ffa2cd2e2_c.jpg')})` }}>
      <Container>
        <h2 className="display-4 mt-5 mb-5 fw-bold "><span className={'text-dark'}>Featured project:</span> <span className={'text-white'}>Faces of Corbridge</span></h2>
        <Col md={8} className="p-3 text-dark rounded-3 bg-success-subtle text-bg-success bg-transparent">
          <p>
            Excavations at Corbridge between 1906 and 1914 uncovered the spectacular remains of the most northerly town in Roman Britain. The names of the lead excavators are well known, however much (if not all) of the hard graft of moving the tonnes of earth was carried out by local labourers. Unfortunately these men remain almost completely anonymous other than one or two names.
          </p>

          <p >
            Photographs from the excavations show many of the faces and we would love to be able to identify these men. Putting names to these faces would add to our archive, and might also lead to further information about the work on site, as well as finally giving credit to those men who excavated this wonderful site.
          </p>
            <Button variant={'dark'} href="https://crowdsourced.micropasts.org">Find more projects to participate in</Button>

        </Col>

      </Container>
    </Container>
  )
}

export default FeaturedProject;