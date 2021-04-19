import React from "react";
import { Navbar, Image } from "react-bootstrap";

const PostHeader = () => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>Posts</Navbar.Brand>
        <Image
          className="ml-auto"
          style={{ width: "30px" }}
          src="/assets/icon.ico"
          roundedCircle
        />
        <p className="mb-0 mx-2">4ALabs</p>
      </Navbar>
      <br />
    </>
  );
};

export default PostHeader;
