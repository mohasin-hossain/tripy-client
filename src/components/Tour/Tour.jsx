import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Tour.css";
import { location } from "../../assets/index";

const Tour = (props) => {
  const { _id, tourPlace, rating, country, price, duration, image } = props.tour;

  return (
    <Col>
      <Card border="light shadow-sm card">
        <Card.Img className="tour-image" variant="top" src={image} />
        <Card.Title className="tour-place text-center">{tourPlace}</Card.Title>
          <div className="d-flex justify-content-between px-3">
            <p>{country}</p>
            <p>{price}</p>
          </div>
        <div className="d-flex border-top px-3 py-3 text-muted fw-bold justify-content-between align-items-center">
          <Link to={`/tours/${_id}`}>
            <button className="btn btn-outline-success">Book Now!</button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Tour;
