import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Jumbotron,
} from "react-bootstrap";

const SearchTask = () => {
  return (
    <div>
      <Jumbotron
        className="d-flex justify-content-center"
        fluid
        style={{ background: "transparent" }}
      >
        <Container>
          <h1 className="text-uppercase text-center">
            I grow by helping people in need
          </h1>
          <InputGroup className="mb-3 w-50">
            <FormControl
              className="col-xs-4"
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
    </div>
  );
};

export default SearchTask;
