import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Row } from "react-bootstrap";

const Collaborators = () => {
  return (
    <>
      <div className={"py-8 bg-white"}>
        <h2 className="display-4 mt-4 mb-5 text-warning fw-bold text-center">Who we have worked with</h2>

        <Col md={10} className="mx-auto ">
          <Row className="justify-content-center my-3 py-2">
            <Col md={2} sm={2} className="col-md-2 text-center mx-2">
              <StaticImage src={"../../images/logos/egypt-exploration-society-logo-final-logo.png"}
                           alt={"Egypt Exploration Society Logo"} className="img-fluid mx-auto mb-3"
                           width={180} placeholder={"NONE"} quality={90} transformOptions={{ grayscale: true }} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/PEF-Logo-Black-Transparent.png"}
                           alt={"Palestine Exploration Fund logo"}
                           className="img-fluid mx-auto mb-3" width={70} placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/university-of-stirling.png"} alt={"Stirling University logo"}
                           className="img-fluid mx-auto mb-3" width={160} placeholder={"NONE"} quality={90}
                           transformOptions={{ grayscale: true }} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/british-museum-logo-vector.png"} alt={"British Museum logo"}
                           className="img-fluid mx-auto mb-3" width={160} placeholder={"NONE"} quality={90} />
            </Col>

          </Row>

          <Row className="justify-content-center my-3">
            <Col md={2} sm={2} className="col-md-2 text-center mx-2">
              <StaticImage src={"../../images/logos/reading.jpg"} alt={"Reading University Logo"}
                           className="img-fluid mx-auto mb-3"
                           width={180} placeholder={"NONE"} quality={90} transformOptions={{ grayscale: true }} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/oxford.png"} alt={"Oxford University logo"}

                           className="img-fluid mx-auto mb-3" width={100} placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/nms.png"} alt={"National Museum of Scotland logo"}
                           transformOptions={{ grayscale: true }}
                           className="img-fluid mx-auto mb-3" width={160} placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/english-heritage-vector-logo.png"} alt={"English Heritage logo"}
                           transformOptions={{ grayscale: true }}
                           className="img-fluid mx-auto mb-3" width={160} placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/denver.png"} alt={"Denver Museum logo"}
                           transformOptions={{ grayscale: true }}
                           className="img-fluid mx-auto mb-3" height={70} placeholder={"NONE"} quality={90} />
            </Col>
          </Row>

          <Row className="justify-content-center my-3">
            <Col md={2} sm={2} className="col-md-2 text-center mx-2">
              <StaticImage src={"../../images/logos/Durham_University_Logo.png"} alt={"Durham University Logo"}
                           className="img-fluid mx-auto mb-3"
                           width={180} placeholder={"NONE"} quality={90} transformOptions={{ grayscale: true }} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/manchester.png"} alt={"Manchester University logo"}
                           transformOptions={{ grayscale: true }}
                           className="img-fluid mx-auto mb-3" width={120} placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/montpelier.jpg"} alt={"Montpelier Archaeology logo"}
                           transformOptions={{ grayscale: true }}
                           className="img-fluid mx-auto mb-3" width={160} placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/fortSnelling.png"} alt={"Historic Fort Snelling logo"}
                           transformOptions={{ grayscale: true }}
                           className="img-fluid mx-auto mb-3" width={100} placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/cua.png"} alt={"Catholic University Americalogo"}
                           transformOptions={{ grayscale: true }}
                           className="img-fluid mx-auto mb-3" height={70} placeholder={"NONE"} quality={90} />
            </Col>
          </Row>

          <Row className="justify-content-center my-3">
            <Col md={2} sm={2} className="col-md-2 text-center mx-2">
              <StaticImage src={"../../images/logos/Society_of_Antiquaries_of_London_logomark.png"} alt={"Society of Antiquaries Logo"}
                           className="img-fluid mx-auto mb-3"
                           width={180} placeholder={"NONE"} quality={90} transformOptions={{ grayscale: true }} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/mary-rose.jpg"} alt={"Mary Rose Trust logo"}
                           transformOptions={{ grayscale: true }}
                           className="img-fluid mx-auto mb-3" width={120} placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/logo-museo-egizio.jpg"} alt={"Museo Egizio   logo"}
                           transformOptions={{ grayscale: true }}
                           className="img-fluid mx-auto mb-3" width={160} placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/Fitz_logo.jpg"} alt={"Fitzwilliam Museum logo"}
                           className="img-fluid mx-auto mb-3" height={70} transformOptions={{ grayscale: true }}
                           placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/spalogocmykpaths-290x300.png"} alt={"Scottish Political Archives logo"}
                           className="img-fluid mx-auto mb-3" height={70} transformOptions={{ grayscale: true }}
                           placeholder={"NONE"} quality={90} />
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/ans_large.png"} alt={"American Numismatics Society logo"}
                           className="img-fluid mx-auto mb-3" height={70} transformOptions={{ grayscale: true }}
                           placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/new-forest-national.png"} alt={"New Forest National Park logo"}
                           className="img-fluid mx-auto mb-3" height={70} transformOptions={{ grayscale: true }}
                           placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/ancient.png"} alt={"Ancient Identities Project logo"}
                           className="img-fluid mx-auto mb-3" height={70} transformOptions={{ grayscale: true }}
                           placeholder={"NONE"} quality={90} />
            </Col>
            <Col md={2} sm={2} className="text-center mx-2">
              <StaticImage src={"../../images/logos/ucm.jpg"} alt={"University of Cambridge Museums logo"}
                           className="img-fluid mx-auto mb-3" height={120} transformOptions={{ grayscale: true }}
                           placeholder={"NONE"} quality={90} />
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};

export default Collaborators;