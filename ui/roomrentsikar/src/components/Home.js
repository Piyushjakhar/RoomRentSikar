import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import storeproducts from "../data.js";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Rooms for Rent</h1>
        <div className="row">
          {storeproducts.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-3 col-sm-6 col-xs-12"
              style={{ paddingTop: "20px" }}
            >
              <Card style={{ width: "18rem" }}>
                <Link to="/details">
                  <Card.Img variant="top" src={item.img} />
                </Link>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <span>$</span>
                    {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
