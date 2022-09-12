import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 style={{ margin: "auto" }}>
          {isLogin ? "Authorization" : "Registration"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter email.." />
          <Form.Control className="mt-3" placeholder="Enter password.." />

          <div className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                Don't have an account?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>{" "}
              </div>
            ) : (
              <div>
                Already have an account?{" "}
                <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>{" "}
              </div>
            )}
            <Button className="mt-3 align-self-end" variant="outline-success">
              {isLogin ? "Sign in" : "Sign up"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
