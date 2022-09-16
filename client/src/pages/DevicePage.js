import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

function DevicePage() {
  const device = {
    id: 3,
    name: "12 pro",
    price: 1000,
    rating: 0,
    img: "f1c98852-8326-4cff-ac34-09d117b6c742.jpg",
    typeId: 2,
    brandId: 4,
  };
  const description = [
    {
      id: 1,
      title: "RAM",
      description: "5GB",
    },
    {
      id: 2,
      title: "Camera",
      description: "12 Mpx",
    },
    {
      id: 3,
      title: "Processor",
      description: "intel core i5",
    },
    {
      id: 4,
      title: "the number of cores",
      description: "5",
    },
    {
      id: 5,
      title: "battery",
      description: "4000",
    },
  ];
  return (
    <Container>
      <Row className="m-4">
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="d-flex flex-column align-items-center">
              {device.name}
            </h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>From: {device.price} $</h3>
            <Button variant={"outline-dark"}>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Info</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
}

export default DevicePage;
