import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from "../../store/actions";
import { Table } from "react-bootstrap";

import UserHero from "../UserTab/UserHero";
import UserHeader from "../UserTab/UserHeader";

const Users = () => {
  const userinfo = useSelector((state) => state.home?.userinfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserRequest());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <UserHeader />
      <div className="mx-3 px-3">
        <Table bordered hover>
          <thead>
            <tr>
              <th colSpan="4">All Users</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ color: "grey" }}>
              <td>User</td>
              <td>Info</td>
              <td>Account</td>
            </tr>
            {userinfo.map((item) => (
              <UserHero
                key={item.id}
                name={item.name}
                info={item.info}
                account={item.account}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
