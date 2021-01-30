import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Questions from "../components/faq/Questions";
import Contact from "../components/faq/Contact";

const FAQ = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Frequently Asked Questions" subtitle="Help" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        <Questions />
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="3" md="12">
        <Contact />
      </Col>
    </Row>
  </Container>
);

export default FAQ;
