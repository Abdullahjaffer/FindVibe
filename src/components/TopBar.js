import { Button, Layout, Menu } from "antd";
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
    <Menu.Item key="4">
      <NavLink exact to="/login">
        Login
      </NavLink>
    </Menu.Item>
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
          <div>{menuItems(this.getActiveMenuItems(), () => {})}</div>
        </div>
      </Layout.Header>
    );
  }
}
export default withRouter(TopBar);
