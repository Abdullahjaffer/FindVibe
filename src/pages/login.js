import React from "react";
import { Row, Col, Input, Form, Button, Checkbox, Card } from "antd";
import { UploadOutlined, GoogleOutlined } from "@ant-design/icons";

class Login extends React.Component {
  signIn = (values) => {
    localStorage.setItem("login", JSON.stringify(values));
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form onFinish={this.signIn}>
              <Row gutter={[16, 16]}>
                <Col
                  span={12}
                  style={{
                    padding: 25,
                  }}
                >
                  <Form.Item
                    name="email"
                    // noStyle
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                    // style={{
                    //   width: "100%",
                    // }}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    name="username"
                    // noStyle
                    rules={[
                      {
                        required: true,
                        min: 6,
                      },
                    ]}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input
                      placeholder="Username"
                      // style={{
                      //   marginTop: 10,
                      // }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    // noStyle
                    rules={[
                      {
                        required: true,
                        min: 6,
                      },
                    ]}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input
                      placeholder="Name"
                      // style={{
                      //   marginTop: 10,
                      // }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    // noStyle
                    rules={[
                      {
                        required: true,
                        min: 8,
                      },
                    ]}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input
                      placeholder="Password"
                      // style={{
                      //   marginTop: 10,
                      // }}
                    />
                  </Form.Item>
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
                  <Form.Item
                    name="bio"
                    // noStyle
                    rules={[
                      {
                        required: true,
                        min: 8,
                      },
                    ]}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input.TextArea
                      placeholder="Bio..."
                      style={{
                        marginTop: 10,
                      }}
                      rows={5}
                    />
                  </Form.Item>

                  <div
                    style={{
                      textAlign: "right",
                      marginTop: 10,
                    }}
                  >
                    <Form.Item
                      name="terms-and-privacy"
                      // noStyle
                      // rules={[
                      //   {
                      //     required: true,
                      //   },
                      // ]}
                      style={{
                        width: "100%",
                      }}
                      valuePropName="checked"
                    >
                      <Checkbox>Terms and privacy</Checkbox>
                    </Form.Item>
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
                  <Button
                    type="primary"
                    ghost
                    size="large"
                    shape="round"
                    htmlType="submit"
                  >
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
            </Form>
          </Col>
          <Col
            span={12}
            // style={{
            //   padding: 25,
            // }}
          >
            <Card>
              <Form onFinish={this.signIn}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Form.Item
                    name="email"
                    // noStyle
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <div
                    style={{
                      padding: 5,
                    }}
                  >
                    {" "}
                  </div>
                  <Form.Item
                    name="password"
                    // noStyle
                    rules={[
                      {
                        required: true,
                        min: 8,
                      },
                    ]}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input placeholder="Password" />
                  </Form.Item>
                </div>
                <div>
                  <Button type="primary" shape="round" htmlType="submit">
                    Log in
                  </Button>
                  <Button type="link">Forgot Password</Button>
                </div>
              </Form>
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
