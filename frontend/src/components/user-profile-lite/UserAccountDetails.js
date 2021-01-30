import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [medical, setMedical] = React.useState("");

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
    if (name==="firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }else if (name === "email") {
      setEmail(value);
    }else if (name === "phone") {
      setPhone(value);
    }else if (name === "address") {
      setAddress(value);
    }else if (name === "city") {
      setCity(value);
    }else if (name === "state") {
      setState(value);
    }else if (name === "medical") {
      setMedical(value);
    }
  }

  return (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value={firstName}
                    name="firstName"
                    onChange={(event) => {onChangeHandler(event)}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value={lastName}
                    name="lastName"
                    onChange={(event) => {onChangeHandler(event)}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value={email}
                    name="email"
                    onChange={(event) => {onChangeHandler(event)}}
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Phone Number</label>
                  <FormInput
                    id="fePassword"
                    placeholder="Phone Number"
                    value={phone}
                    name="phone"
                    onChange={(event) => {onChangeHandler(event)}}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value={address}
                  name="address"
                  onChange={(event) => {onChangeHandler(event)}}
                /> 
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
                    value={city}
                    name="city"
                    onChange={(event) => {onChangeHandler(event)}}
                  />
                </Col>
                {/* State */}
                <Col md="6" className="form-group">
                <label htmlFor="feInputState">State</label>
                  <FormInput
                    id="feInputState"
                    placeholder="State"
                    value={state}
                  name="state"
                  onChange={(event) => {onChangeHandler(event)}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Medical Conditions</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row>
              <Button>Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
)};

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
