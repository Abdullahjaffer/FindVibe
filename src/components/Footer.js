import { Button, Col, Input, Layout, Row } from "antd";
import React from "react";
import DummyFooter from "../static/Path-13@2x.png";

class Footer extends React.Component {
  componentDidMount() {
    console.log(DummyFooter);
  }
  render() {
    return (
      <Layout.Footer
        style={{
          backgroundColor: "white",
          backgroundImage: `url(${DummyFooter})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "120% 110%",
          padding: 50,
        }}
      >
        <Row
          gutter={[16, 16]}
          style={{
            marginBottom: 0,
          }}
          justify="center"
          align="bottom"
        >
          <Col span={12}>
            <Row
              gutter={[16, 16]}
              style={{
                marginBottom: 0,
              }}
            >
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((v) => (
                <Col span={8}>
                  <h4
                    style={{
                      color: "white",
                      marginBottom: 0,
                    }}
                  >
                    Helpful text
                  </h4>
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            span={12}
            style={{
              textAlign: "right",
            }}
          >
            <div>
              <h2
                style={{
                  color: "white",
                  width: 300,
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                Stay Upto Date.
              </h2>
            </div>
            <Input
              placeholder="Email"
              style={{
                maxWidth: 300,
              }}
            />
            <div
              style={{
                textAlign: "right",
                marginTop: 10,
              }}
            >
              <Button shape="round">Sign Up</Button>
            </div>
          </Col>
        </Row>
      </Layout.Footer>
    );
  }
}
export default Footer;
