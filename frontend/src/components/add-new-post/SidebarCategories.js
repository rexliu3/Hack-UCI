import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput,
} from "shards-react";

import Checkbox from '@material-ui/core/CheckBox';

const SidebarCategories = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
        <Checkbox className="mb-1" value="frontline" color="primary"/><div style={{display:'inline'}}>Medical Condition</div>
        <br/>
        <Checkbox className="mb-1" value="frontline" color="primary"/><div style={{display:'inline'}}>Vulnerable Population</div>
        <br/>
          <Checkbox className="mb-1" value="frontline" color="primary"/><div style={{display:'inline'}}>Frontline Worker</div>
          <br/>
          <Checkbox className="mb-1" value="frontline" color="primary"/><div style={{display:'inline'}}> Mandatory Travel</div>
          <br/>
          <Checkbox className="mb-1" value="frontline" color="primary"/><div style={{display:'inline'}}> Uncategorized</div>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Categories"
};

export default SidebarCategories;
