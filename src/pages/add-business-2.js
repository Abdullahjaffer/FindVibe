import { ArrowLeftOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Divider, Row, Typography } from "antd";
import React from "react";

class AddBusinessSelectPackage extends React.Component {
  render() {
    return (
      <>
        <Typography.Title
          style={{
            color: "#17AAF9",
            textAlign: "center",
          }}
          level={3}
        >
          Create Your Business Account
        </Typography.Title>
        <div
          style={{
            padding: 50,
          }}
        >
          <Row gutter={[16, 32]}>
            <Col span={4}>
              <Button icon={<ArrowLeftOutlined />} block>
                Back
              </Button>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  height: "100%",
                }}
              >
                <Typography.Title
                  level={5}
                  style={{
                    color: "#17AAF9",
                    textAlign: "center",
                  }}
                >
                  Monthly
                </Typography.Title>
                <Divider />
                {[
                  "Messaging",
                  "Business Dashoard",
                  "Get Reviews",
                  "Website Visits",
                  "Built For Small Businesses",
                ].map((v) => (
                  <div>
                    <LikeOutlined /> {v}
                  </div>
                ))}

                <div
                  style={{
                    marginTop: 42,
                  }}
                >
                  <Button type="primary" ghost block>
                    $19.99/Month
                  </Button>
                  <Button
                    type="primary"
                    block
                    style={{
                      marginTop: 10,
                    }}
                  >
                    Choose Plan
                  </Button>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Typography.Title
                  level={5}
                  style={{
                    color: "#17AAF9",
                    textAlign: "center",
                  }}
                >
                  Monthly
                </Typography.Title>
                <Divider />
                {[
                  "Messaging",
                  "Business Dashoard",
                  "Get Reviews",
                  "Website Visits",
                  "Built For Small Businesses",
                  "Save Even More",
                ].map((v) => (
                  <div>
                    <LikeOutlined /> {v}
                  </div>
                ))}

                <div
                  style={{
                    marginTop: 20,
                  }}
                >
                  <Button type="primary" ghost block>
                    $19.99/Month
                  </Button>
                  <Button
                    type="primary"
                    block
                    style={{
                      marginTop: 10,
                    }}
                  >
                    Choose Plan
                  </Button>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <div
                style={{
                  padding: 20,
                  paddingBottom: 0,
                }}
              >
                <div>
                  Whatever you Choose
                  <br />
                  We give you a 14-day free trial!
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 180,
                  }}
                >
                  <Checkbox>Terms and Privacy</Checkbox>
                  <br />
                  <Button
                    type="primary"
                    style={{
                      marginTop: 10,
                    }}
                    onClick={() => {
                      console.log(this.props.history.push("/add-business-2"));
                    }}
                  >
                    Save and Continue
                  </Button>
                  <Button type="link">
                    Have a business account? Login here.
                  </Button>
                </div>
              </div>
            </Col>
            <Col
              span={12}
              style={{
                color: "#17AAF9",
              }}
            >
              <Typography.Title
                level={3}
                style={{
                  color: "#17AAF9",
                }}
                underline
              >
                Grow Your Business
              </Typography.Title>
              <p>
                List your business or services and let the world see <br />
                gain exposure and grow your business with <br />
                limited investments.
              </p>
            </Col>
            <Col
              span={12}
              style={{
                color: "#17AAF9",
              }}
            >
              <Typography.Title
                level={3}
                style={{
                  color: "#17AAF9",
                }}
                underline
              >
                Get Found
              </Typography.Title>
              <p>
                Grow your business with a powerful business dashboard and tools{" "}
                <br />
                to help you grow. Messaging, Analytics and sales, you can now do{" "}
                <br />
                and manage your business flow with FindVibe everything online!
              </p>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default AddBusinessSelectPackage;
