import {
  HeartOutlined,
  MessageOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown, Layout, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../static/logo.png";

const menuItems = (defaultKey, cb) => (
  <Menu
    mode="horizontal"
    selectedKeys={defaultKey}
    // defaultOpenKeys={["2", "3", "6"]}
  >
    <Menu.Item key="1">
      <NavLink exact to="/">
        Home
      </NavLink>
    </Menu.Item>
    <Menu.Item key="2">
      <NavLink exact to="/listings">
        Listings
      </NavLink>
    </Menu.Item>
    <Menu.Item key="3">
      <NavLink exact to="/reviews">
        Reviews
      </NavLink>
    </Menu.Item>
    {localStorage.getItem("login") ? (
      <React.Fragment>
        <Menu.Item key="5">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    // href="http://www.alipay.com/"
                  >
                    Lorem ipsum dolor sit amet
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    // href="http://www.taobao.com/"
                  >
                    Lorem ipsum dolor sit amet
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    // href="http://www.tmall.com/"
                  >
                    Lorem ipsum dolor sit amet,
                  </a>
                </Menu.Item>
              </Menu>
            }
            placement="topRight"
          >
            <Button
              type="link"
              size="large"
              icon={
                <Badge count={3}>
                  <NotificationOutlined
                    style={{
                      fontSize: 20,
                    }}
                  />
                </Badge>
              }
            />
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="6">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <NavLink exact to="/business-profile">
                    Profile Settings
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink exact to="/messages">
                    <MessageOutlined /> Messages
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink exact to="/">
                    <HeartOutlined /> Favorites
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink exact to="/dashboard">
                    Dashboard
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    type="primary"
                    ghost
                    onClick={() => {
                      localStorage.removeItem("login");
                      cb();
                    }}
                  >
                    Log out
                  </Button>
                </Menu.Item>
              </Menu>
            }
            placement="topRight"
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Dropdown>
        </Menu.Item>
      </React.Fragment>
    ) : (
      <Menu.Item key="4">
        <NavLink exact to="/login">
          Login
        </NavLink>
      </Menu.Item>
    )}
  </Menu>
);

class TopBar extends React.Component {
  componentDidMount() {}
  // Finds which menu item is s
  getActiveMenuItems = () => {
    let keys = [];
    menuItems().props.children.map((v) => {
      keys = [...keys, this.getKeysFromChildren(v)];
    });
    keys = keys.flat().filter((v) => v);
    let selectedKeys = keys.find((v) => v.path == this.props.location.pathname);
    return selectedKeys ? [selectedKeys.key] : [];
  };
  getKeysFromChildren = (value) => {
    if (value.props) {
      if (value.props.children instanceof Array) {
        return value.props.children.map((c) => this.getKeysFromChildren(c));
      } else {
        let tmp = {};
        tmp.key = value.key;
        tmp.path = value.props.children.props.to;
        return tmp;
      }
    }
    return {};
  };

  render() {
    return (
      <Layout.Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={logo} width="180" />
          <Button
            type="primary"
            ghost
            size="large"
            onClick={() => this.props.history.push("add-business-1")}
          >
            Add Your Business
          </Button>
          <div>
            {menuItems(this.getActiveMenuItems(), () => {
              this.forceUpdate();
            })}
          </div>
        </div>
      </Layout.Header>
    );
  }
}
export default withRouter(TopBar);
