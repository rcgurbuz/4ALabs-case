import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const OverviewTop = () => {
  return (
    <div className="mx-5 mb-5">
      <CardDeck>
        <Card className="cardtop">
          <Card.Body>
            <Card.Title>Open</Card.Title>
            <Card.Text>99</Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardtop">
          <Card.Body>
            <Card.Title>Open</Card.Title>
            <Card.Text>99</Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardtop">
          <Card.Body>
            <Card.Title>Open</Card.Title>
            <Card.Text>99 </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardtop">
          <Card.Body>
            <Card.Title>Open</Card.Title>
            <Card.Text>99 </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardtop">
          <Card.Body>
            <Card.Title>Open</Card.Title>
            <Card.Text>99 </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default OverviewTop;
