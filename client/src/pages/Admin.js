import React from "react";
import { Button, Container } from "react-bootstrap";

function Admin() {
  return (
    <Container className="d-flex flex-column  ">
      <Button variant="outline-dark" className="mt-2">
        Add type
      </Button>
      <Button variant="outline-dark" className="mt-2">
        Add brand
      </Button>
      <Button variant="outline-dark" className="mt-2">
        Add device
      </Button>
    </Container>
  );
}

export default Admin;
