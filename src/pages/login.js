import React from "react";
import { Row, Col, Input, Form, Button, Checkbox, Card } from "antd";
import { UploadOutlined, GoogleOutlined } from "@ant-design/icons";

class Login extends React.Component {
  render() {
    return (
      <>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Row gutter={[16, 16]}>
              <Col
                span={12}
                style={{
                  padding: 25,
                }}
              >
                <Input placeholder="Email" />
                <Input
                  placeholder="Username"
                  style={{
                    marginTop: 10,
                  }}
                />
                <Input
                  placeholder="Name"
                  style={{
                    marginTop: 10,
                  }}
                />
                <Input
                  placeholder="Password"
                  style={{
                    marginTop: 10,
                  }}
                />
              </Col>
              <Col
                span={12}
                style={{
                  padding: 25,
                }}
              >
                <Button type="primary" ghost block>
                  Upload Profile Photo <UploadOutlined />
                </Button>
                <Input.TextArea
                  placeholder="Bio..."
                  style={{
                    marginTop: 10,
                  }}
                  rows={5}
                />

                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <Checkbox>Terms and privacy</Checkbox>
                </div>
              </Col>
              <Col
                span={24}
                style={{
                  textAlign: "right",
                }}
              >
                <Button
                  type="primary"
                  ghost
                  size="large"
                  icon={<GoogleOutlined />}
                  shape="round"
                >
                  Continue with google
                </Button>{" "}
                <Button type="primary" ghost size="large" shape="round">
                  Create Account
                </Button>
                <div>
                  Already have an account?{" "}
                  <Button
                    type="link"
                    style={{
                      padding: 0,
                    }}
                  >
                    Login
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            span={12}
            // style={{
            //   padding: 25,
            // }}
          >
            <Card>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Input
                  placeholder="Email"
                  style={{
                    width: "49%",
                  }}
                />
                <Input
                  placeholder="Password"
                  style={{
                    width: "49%",
                  }}
                />
              </div>
              <div>
                <Button type="primary" shape="round">
                  Log in
                </Button>
                <Button type="link">Forgot Password</Button>
              </div>
            </Card>
            Business Account?{" "}
            <Button
              type="link"
              style={{
                padding: 0,
              }}
            >
              Login
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default Login;
