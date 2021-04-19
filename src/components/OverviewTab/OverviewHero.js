import React from "react";
import { Card, CardDeck } from "react-bootstrap";

import VerticalBar from "../charts/VerticalBar";
import DoughnutChart from "../charts/DoughnutChart";

const OverviewHero = () => {
  return (
    <div className="mx-5">
      <CardDeck>
        <Card style={{ border: "2px solid #007bff" }}>
          <Card.Body>
            <Card.Title>Today's Trends</Card.Title>
            <VerticalBar />
          </Card.Body>
        </Card>
        <Card style={{ border: "2px solid #007bff" }}>
          <Card.Body>
            <Card.Title>Interests</Card.Title>
            <DoughnutChart />
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default OverviewHero;
