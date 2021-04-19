import React from "react";
import { Image } from "react-bootstrap";

const UserHero = ({ name, info, account }) => {
  return (
    <tr>
      <td className="td">
        <Image
          src="/assets/unnamed.png"
          roundedCircle
          style={{ width: "30px" }}
          className="mr-5"
        />
        {name}
      </td>
      <td className="td">{info}</td>
      <td className="td">{account}</td>
    </tr>
  );
};

export default UserHero;
