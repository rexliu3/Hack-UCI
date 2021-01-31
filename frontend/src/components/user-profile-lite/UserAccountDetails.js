import React, { useEffect, useState } from "react";
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
  Button,
  FormCheckbox
} from "shards-react";
import firebase from "../../firebase/index";

import Checkbox from '@material-ui/core/Checkbox';

const UserAccountDetails = props => {
  const { data } = props;
  const [users, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState(false);
  const [updated, setUpdated] = useState(false);

  const split_name = full_name => {
    for (let i = 0; i < full_name.length; i += 1) {
      if (full_name[i] == " ") {
        let returner = [
          full_name.slice(0, i),
          full_name.slice(i + 1, full_name.length)
        ];
        return returner;
      }
    }
    return [full_name, ""];
  };

  const initstate = {
    firstName: split_name(data.displayName)[0],
    lastName: split_name(data.displayName)[1],
    age: "",
    email: data.email,
    phone: "",
    address: "",
    city: "",
    state: "",
    medicalConditions: "",
    wapScore: "",
    pastApplications: "",
    care: false,
    essential: false,
    health: false,
    pregnant: false,
  };

  const [inputs, setInputs] = useState(initstate);

  // Get a Specific User from Firebase
  const getSpecificUser = async uid => {
    firebase.db
      .collection("users")
      .doc(uid)
      .get()
      .then(function(doc) {
        setCurrentUser(doc.data());
        setInputs(prev => ({
          ...prev,
          firstName: split_name(doc.data().displayName)[0],
          lastName: split_name(doc.data().displayName)[1],
          age: doc.data().age,
          email: doc.data().email,
          phone: doc.data().phone,
          address: doc.data().address,
          city: doc.data().city,
          state: doc.data().state,
          medicalConditions: doc.data().medicalConditions,
          wapScore: doc.data().wapScore,
          pastApplications: doc.data().pastApplications,
          photoURL: doc.data().photoURL,
          care: doc.data().care,
          essential: doc.data().essential,
          health: doc.data().health,
          pregnant: doc.data().pregnant,
        }));
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };

  const updateSpecificUser = async => {
    const updated_data = {
      displayName: inputs.firstName + " " + inputs.lastName,
      age: inputs.age,
      email: inputs.email,
      phone: inputs.phone,
      address: inputs.address,
      city: inputs.city,
      state: inputs.state,
      medicalConditions: inputs.medicalConditions,
      photoURL: inputs.photoURL,
      care: inputs.care,
      essential: inputs.essential,
      health: inputs.health,
      pregnant: inputs.pregnant,

      //wapScore: inputs.wapScore,
      //pastApplications: inputs.pastApplications
    };
    


    for (var key in updated_data) {
      if (updated_data[key] == undefined || updated_data[key] == null || updated_data[key] == '') {
        updated_data[key] = ''
        if (key == 'essential' || key == 'care' || key=="health" || key=="pregnant") {
          updated_data[key] = false
        }
      } else if (updated_data[key] == 'true') {
        updated_data[key] = true
      } else if(updated_data[key] == 'false') {
        updated_data[key] = false
      }
    }

    if (!error) {
      firebase.db
        .collection("users")
        .doc(data.uid)
        .set(updated_data)
        .then(function() {
          console.log("Success");
          setUpdated(true);
        })
        .catch(function(error) {
          console.error("Error", error);
        });
    }
    // location.reload();
  };

  useEffect(() => {
    //getUsers();
    getSpecificUser(data.uid);
  }, []);

  const getUsers = () => {
    firebase.db
      .collection("covid-19 vaccine queue")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          //prints the data in the database to the console
          // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          setUser(prev => [...prev, doc.data()]);
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const sendUserInfo = async e => {
    e.preventDefault();
    await firebase.db
      .collection("covid-19 vaccine queue")
      .add(inputs)
      .then(async documentReference => {
        console.log("User ID", documentReference.id);
        await setUser([]);
        getUsers();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const onCheck = e => {
    const { name } = e.target;
    if (inputs.name == undefined || inputs.name == null) {
      setInputs(prev => ({ ...prev, [name]: true}));
    } else {
      setInputs(prev => ({ ...prev, [name]: !inputs.name}));
    }
  }

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Account Details</h6>
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
                    <FormTextarea
                      id="feMedicalCondition"
                      placeholder=""
                      value={inputs.medicalConditions}
                      name="medicalConditions"
                      onChange={handleChange}
                      rows="5"
                    />
                  </Col>
                </Row>
                <Row>
                  <div style={{margin:'-1rem auto 0.2rem auto'}}><Checkbox color="primary" name="care" value={inputs.care} onChange={onCheck}/>Longterm Care Worker</div>
                  <div style={{margin:'-1rem auto 0.2rem auto'}}><Checkbox color="primary" name="essential" value={inputs.essential} onChange={onCheck}/>Essential Worker</div>
                  <div style={{margin:'-1rem auto 0.2rem auto'}}><Checkbox color="primary" name="health" value={inputs.health} onChange={onCheck}/>Healthcare Worker</div>
                  <div style={{margin:'-1rem auto 0.2rem auto'}}><Checkbox color="primary" name="pregnant" value={inputs.pregnant} onChange={onCheck}/>Pregnant</div>

                  
                </Row>
                <Button onClick={inputs => updateSpecificUser(inputs)}>
                  Update Account
                </Button>
                {updated && <p style={{margin: '0.5rem 0 0 0'}}>Your Account Information has been Updated</p>}
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default UserAccountDetails;
