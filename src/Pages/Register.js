import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../App";
import Header from "../Components/Header/Header";

const Register = () => {
  const { taskID } = useParams();
  const { loggedInUser, volunteer } = useContext(UserContext);

  const volunteers = volunteer.find((vl) => vl._id === taskID);
  // const { name } = volunteers;
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = new Date();
    const description = document.getElementById("description").value;
    const title = document.getElementById("title").value;
    const total = { name, email, date, description, title };
    fetch("https://young-bayou-15947.herokuapp.com/addRegistration", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(total),
    });
    history.push("/totalActivities");
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}>
        <img
          style={{ width: "300px" }}
          src="https://i.ibb.co/zR4wpY3/Group-1329.png"
          alt=""
        />
      </div>

      <div className="col-md-4 text-center rounded shadow ">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name..."
              required="true"
              id="name"
              value={loggedInUser.name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required="true"
              id="email"
              value={loggedInUser.email}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDate">
            <Form.Label>Select Time</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter your name..."
              required="true"
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" id="description" placeholder="Optional" />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder=""
              required="true"
              id="title"
              // value={volunteers && volunteers.name}
              value="Child Support"
            />
          </Form.Group>

          <Button variant="primary" className="btn-block" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
