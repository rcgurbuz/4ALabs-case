import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../../store/actions";
import { Table } from "react-bootstrap";

import PostHeader from "../PostTab/PostHeader";
import PostHero from "../PostTab/PostHero";

const Posts = () => {
  const posts = useSelector((state) => state.home?.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostRequest());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <PostHeader />
      <div className="mx-3 px-3">
        <Table bordered hover>
          <thead>
            <tr>
              <th colSpan="4">All Posts</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ color: "grey" }}>
              <td>User</td>
              <td>Title</td>
              <td>Message</td>
            </tr>
            {posts.map((item) => (
              <PostHero
                key={item.id}
                userName={item.userName}
                title={item.title}
                body={item.body}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Posts;
