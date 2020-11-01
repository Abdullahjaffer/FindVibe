import { Button, Col, Row, Typography } from "antd";
import React from "react";

class FooterHeader extends React.Component {
  render() {
    const buttonWidth = 150;
    return (
      <>
        <Row
          style={{
            marginTop: 50,
          }}
        >
          <Col
            span={6}
            style={{
              textAlign: "center",
            }}
          >
            <Button
              type="primary"
              ghost
              style={{
                width: buttonWidth,
                borderRadius: 16,
              }}
            >
              Sign Up
            </Button>
            <br />
            <Button
              type="primary"
              style={{
                width: buttonWidth,
                marginTop: 10,
                borderRadius: 16,
              }}
            >
              Log in
            </Button>
            <br />
            <Button
              type="link"
              style={{
                width: buttonWidth,
                marginTop: 10,
              }}
            >
              Forgot password?
            </Button>
          </Col>
          <Col span={18}>
            <Typography.Title>
              Together We Can: Support, Grow, Be Safe!
            </Typography.Title>
          </Col>
        </Row>
      </>
    );
  }
}
export default FooterHeader;
