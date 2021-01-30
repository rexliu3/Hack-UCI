/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button
} from "shards-react";

const Contact = ({ title }) => {

  return (
    <Card small className="mb-3">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>

      <CardBody className="p-0">
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">phone</i>
              <strong className="mr-1">Phone Number:</strong> 233-232-2329
            </span>
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">web</i>
              <strong className="mr-1">Website:</strong>{" "}
            </span>
          </ListGroupItem>
          {/*<ListGroupItem className="d-flex px-3 border-0">
            <Button outline theme="accent" size="sm">
              <i className="material-icons">save</i> Save Draft
            </Button>
            <Button outline theme="accent" size="sm" className="ml-auto" >
              <i className="material-icons">file_copy</i> Email
            </Button>
  </ListGroupItem>*/}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

Contact.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

Contact.defaultProps = {
  title: "Help Contact Information"
};

export default Contact;
