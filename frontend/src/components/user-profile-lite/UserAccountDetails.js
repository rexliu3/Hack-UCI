import React, {useEffect, useState} from "react";
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
import firebase from '../../firebase/index';

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

  const [users, setUser] = useState([])
  const initstate = { firstName: '', 
                    lastName: '', 
                    age: '', 
                    email: '', 
                    phone: '', 
                    address: '',
                    city: '',
                    state: '',
                    medicalConditions: '',
                    wapScore: '',
                    pastApplications: ''
}
  const [inputs, setInputs] = useState(initstate)

    useEffect( () => {
        getUsers()
    }, [])

    const getUsers = () => {
      firebase.db.collection('covid-19 vaccine queue').get()
        .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          //prints the data in the database to the console
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
          setUser(prev => ([...prev, doc.data()]))
        })
      })
      .catch(err => {
        console.log(err.message)
      })
    }


    const sendUserInfo = async (e) => {
      e.preventDefault()
      await firebase.db.collection('covid-19 vaccine queue').add(inputs)
      .then( async documentReference => {
        console.log('User ID', documentReference.id)
        await setUser([])

        getUsers()
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value}))
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
            <Form onSubmit={sendUserInfo}>
              <Row form>
                <Col md="4" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value={inputs.firstName}
                    name="firstName"
                    onChange={handleChange}
                  />
                </Col>
                <Col md="4" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value={inputs.lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </Col>
                <Col md="4" className="form-group">
                  <label htmlFor="feLastName">Age</label>
                  <FormInput
                    id="feAge"
                    placeholder="Age"
                    value={inputs.age}
                    name="age"
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row form>
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    id="feEmail"
                    placeholder="Email Address"
                    value={inputs.email}
                    name="email"
                    onChange={handleChange}
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Phone Number</label>
                  <FormInput
                    id="fePassword"
                    placeholder="Phone Number"
                    value={inputs.phone}
                    name="phone"
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value={inputs.address}
                  name="address"
                  onChange={handleChange}
                /> 
              </FormGroup>
              <Row form>
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
                    value={inputs.city}
                    name="city"
                    onChange={handleChange}
                  />
                </Col>
                <Col md="6" className="form-group">
                <label htmlFor="feInputState">State</label>
                  <FormInput
                    id="feInputState"
                    placeholder="State"
                    value={inputs.state}
                  name="state"
                  onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row form>
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Medical Conditions</label>
                  <FormTextarea id="feDescription" rows="5" />
                  <FormInput
                    id="feMedicalCondition"
                    placeholder=""
                    value={inputs.medicalConditions}
                    name="medicalConditions"
                    onChange={handleChange}
                  />
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
