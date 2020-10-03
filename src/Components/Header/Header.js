import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Jumbotron,
  Nav,
  Navbar,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <img
            className="img-fluid w-25"
            src="https://i.ibb.co/zR4wpY3/Group-1329.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link className="mx-3 text-dark" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3 text-dark" href="/donation">
              Donation
            </Nav.Link>
            <Nav.Link className="mx-3 text-dark" href="/events">
              Events
            </Nav.Link>
            <Nav.Link className="mx-3 text-dark" href="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Nav className="mr-3">
            <Nav.Link href="#deets">
              {" "}
              <Button className="btn btn-lg" variant="primary">
                Register
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button className="btn btn-lg" variant="dark">
                Admin
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid style={{background:"transparent"}}>
        <Container>
          <h1 className="text-uppercase text-center">
            I grow by helping people in need
          </h1>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Header;
