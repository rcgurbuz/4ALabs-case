import React from "react";
import { Nav, Col, Tab, Row } from "react-bootstrap";

import { FaArrowRight } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import {
  RiMailSendLine,
  RiContactsLine,
  RiSendPlane2Line,
  RiArticleLine,
} from "react-icons/ri";
import { MdLightbulbOutline, MdFace } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";

import Overview from "../../components/DashboardTabs/Overview";
import Posts from "../../components/DashboardTabs/Posts";
import Users from "../../components/DashboardTabs/Users";

const DashboardPage = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="our-overview">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className="head">
                <MdFace />
                Case
              </Nav.Link>
            </Nav.Item>
            <hr />
            <Nav.Item>
              <Nav.Link eventKey="our-overview">
                <FaArrowRight />
                Overview
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="our-posts">
                <RiMailSendLine />
                Posts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="our-users">
                <MdLightbulbOutline />
                Users
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="our-b">
                <RiContactsLine />
                Contacts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="our-c">
                <RiSendPlane2Line />
                Agents
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="our-d">
                <RiArticleLine />
                Articles
              </Nav.Link>
            </Nav.Item>
            <hr />
            <Nav.Item>
              <Nav.Link eventKey="our-e">
                <FiSettings />
                Settings
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="our-f">
                <AiOutlineBell />
                Subscriptions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} style={{ padding: 0 }}>
          <Tab.Content>
            <Tab.Pane eventKey="our-overview">
              <Overview />
            </Tab.Pane>
            <Tab.Pane eventKey="our-posts">
              <Posts />
            </Tab.Pane>
            <Tab.Pane eventKey="our-users">
              <Users />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
export default DashboardPage;
