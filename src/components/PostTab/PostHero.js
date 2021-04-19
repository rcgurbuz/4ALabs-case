import React from "react";
import { Image } from "react-bootstrap";

const PostHero = ({ userName, title, body }) => {
  return (
    <tr>
      <td className="td">
        <Image
          src="/assets/usericon.png"
          roundedCircle
          style={{ width: "30px" }}
          className="mr-5"
        />
        {userName}
      </td>
      <td className="td">{title}</td>
      <td className="td">{body}</td>
    </tr>
  );
};

export default PostHero;
