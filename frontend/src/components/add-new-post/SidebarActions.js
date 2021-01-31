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

const SidebarActions = ({ title }) => {
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(false);

  const onSubmitHandler = event => {
    setSubmitted(true);
  };

  const onSaveHandler = event => {
    setSaved(true);
  };

  return (
    <Card small className="mb-3">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>

      <CardBody className="p-0">
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">flag</i>
              <strong className="mr-1">Save Satus:</strong> 
              {submitted && "Submitted"}
              {(saved && !submitted) && "Draft Saved"}
              {(!saved && !submitted) && "Unsaved"}
            </span>
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">visibility</i>
              <strong className="mr-1">Appeal Status:</strong>{" "}
              {submitted && <strong className="text-success">Appeal Under Review</strong>}
              {!submitted && <strong style={{color: 'red'}}>Not Submitted</strong>}
            </span>
          </ListGroupItem>
          <ListGroupItem className="d-flex px-3 border-0">
            <Button outline theme="accent" size="sm" onClick={(event) => {onSaveHandler(event)}}>
              <i className="material-icons">save</i> Save Draft
            </Button>
            <Button theme="accent" size="sm" className="ml-auto" onClick={(event) => {onSubmitHandler(event)}}>
              <i className="material-icons">file_copy</i> Submit
            </Button>
          </ListGroupItem>
          {(saved && !submitted) && <div style={{margin:'0.5vw'}}>Appeal has Been Saved As Draft</div>}
          {submitted && <div style={{margin:'0.5vw'}}>Appeal has Been Submitted!</div>}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "Actions"
};

export default SidebarActions;
