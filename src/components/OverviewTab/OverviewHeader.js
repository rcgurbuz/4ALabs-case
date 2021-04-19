import React from "react";
import { useSelector } from "react-redux";

import { Navbar, Image } from "react-bootstrap";

const OverviewHeader = () => {
  const user = useSelector((state) => state.home?.userData);

  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>Overview</Navbar.Brand>
        <Image
          className="ml-auto"
          style={{ width: "30px" }}
          src="/assets/icon.ico"
          roundedCircle
        />
        <p className="mb-0 mx-2">
          {" "}
          Welcome: <span style={{ color: "red" }}>{user?.name}</span>
        </p>
      </Navbar>
      <br />
    </>
  );
};

export default OverviewHeader;
