import React, { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          BuyDevice
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"}>Admin Panel</Button>
            <Button variant={"outline-light"} style={{ marginLeft: "20px" }}>
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              log in
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
