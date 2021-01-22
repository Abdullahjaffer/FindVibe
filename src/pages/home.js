import {
  EnvironmentOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Avatar, Button, Card, Col, Rate, Row, Typography } from "antd";
import React from "react";
import FooterHeader from "../components/FooterHeader";
import SearchBar from "../components/SearchBar";

class Home extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Typography.Title
            style={{
              color: "#17AAF9",
              textAlign: "center",
            }}
            level={3}
          >
            Search, Discover, Connect, Support,
          </Typography.Title>

          <SearchBar />
        </div>
        <div
          style={{
            marginTop: 50,
          }}
        >
          <Row>
            <Col span={12}>
              <Typography.Title level={2} type="secondary">
                Our Latest Listings
                <Button
                  type="link"
                  style={{
                    padding: 10,
                  }}
                >
                  <Typography.Text type="secondary" underline={true}>
                    Near Me
                  </Typography.Text>
                </Button>
                <Button
                  type="link"
                  style={{
                    padding: 10,
                  }}
                >
                  <Typography.Text type="secondary" underline={true}>
                    Open Now
                  </Typography.Text>
                </Button>
              </Typography.Title>
            </Col>
            <Col
              span={12}
              style={{
                textAlign: "right",
              }}
            >
              <Typography.Title>
                <Button
                  type="link"
                  style={{
                    padding: 10,
                  }}
                >
                  <Typography.Text type="secondary" underline={true}>
                    View More
                  </Typography.Text>
                </Button>
              </Typography.Title>
            </Col>
          </Row>
          <Carousel arrows slidesPerPage={3} itemWidth={300}>
            {[
              {
                name: "AB Movings",
                location: "brooklyn",
              },
              {
                name: "Sky Hotel",
                location: "New York",
              },
              {
                name: "Mr. Plumber",
                location: "Long Island",
              },
              {
                name: "AB Movings",
                location: "brooklyn",
              },
              {
                name: "AB Movings",
                location: "brooklyn",
              },
              {
                name: "AB Movings",
                location: "brooklyn",
              },
            ].map((v, i) => (
              <div className="floating">
                <img alt="example" src="https://source.unsplash.com/random" />
                <Card
                  className="floater"
                  bodyStyle={{
                    margin: 0,
                    padding: 5,
                    paddingRight: 15,
                    paddingLeft: 15,
                  }}
                >
                  <Card.Meta
                    title={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography.Title level={5} style={{ margin: 0 }}>
                          {v.name}
                        </Typography.Title>
                        <div>
                          <HeartOutlined
                            style={{
                              color: "#17AAF9",
                            }}
                          />
                          {"  "}
                          <MessageOutlined
                            style={{
                              color: "#17AAF9",
                            }}
                          />
                        </div>
                      </div>
                    }
                    description={
                      <span>
                        <EnvironmentOutlined
                          style={{
                            color: "#17AAF9",
                          }}
                        />{" "}
                        <Typography.Text>{v.location}</Typography.Text>
                      </span>
                    }
                  />
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
        <div
          style={{
            marginTop: 50,
          }}
        >
          <Row>
            <Col span={12}>
              <Typography.Title level={2} type="secondary">
                Search Your City
              </Typography.Title>
            </Col>
            <Col
              span={12}
              style={{
                textAlign: "right",
              }}
            >
              <Typography.Title>
                <Button
                  type="link"
                  style={{
                    padding: 10,
                  }}
                >
                  <Typography.Text type="secondary" underline={true}>
                    View More
                  </Typography.Text>
                </Button>
              </Typography.Title>
            </Col>
          </Row>
          <Carousel arrows slidesPerPage={3} itemWidth={300}>
            {[
              {
                name: "AB Movings",
                location: "brooklyn",
              },
              {
                name: "Sky Hotel",
                location: "New York",
              },
              {
                name: "Mr. Plumber",
                location: "Long Island",
              },
              {
                name: "AB Movings",
                location: "brooklyn",
              },
              {
                name: "AB Movings",
                location: "brooklyn",
              },
              {
                name: "AB Movings",
                location: "brooklyn",
              },
            ].map((v, i) => (
              <div className="floating">
                <img alt="example" src="https://source.unsplash.com/random" />
                <Card
                  className="floater"
                  bodyStyle={{
                    margin: 0,
                    padding: 5,
                    paddingRight: 15,
                    paddingLeft: 15,
                    textAlign: "center",
                  }}
                >
                  <Card.Meta
                    title={
                      <div>
                        <Typography.Title level={5} style={{ margin: 0 }}>
                          <EnvironmentOutlined
                            style={{
                              color: "#17AAF9",
                            }}
                          />{" "}
                          {v.location}
                        </Typography.Title>
                      </div>
                    }
                  />
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
        <div
          style={{
            marginTop: 50,
            paddingBottom: 100,
          }}
        >
          <Row>
            <Col span={12}>
              <Typography.Title level={2} type="secondary">
                Latest Reviews
              </Typography.Title>
            </Col>
            <Col
              span={12}
              style={{
                textAlign: "right",
              }}
            >
              <Typography.Title>
                <Button
                  type="link"
                  style={{
                    padding: 10,
                  }}
                >
                  <Typography.Text type="secondary" underline={true}>
                    View More
                  </Typography.Text>
                </Button>
              </Typography.Title>
            </Col>
          </Row>
          <Carousel arrows slidesPerPage={3} itemWidth={300}>
            {[
              {
                name: "AB Movings",
                location: "brooklyn",
              },
              {
                name: "Sky Hotel",
                location: "New York",
              },
              {
                name: "Mr. Plumber",
                location: "Long Island",
              },
              {
                name: "AB Movings",
                location: "brooklyn",
              },
              {
                name: "AB Movings",
                location: "brooklyn",
              },
              {
                name: "AB Movings",
                location: "brooklyn",
              },
            ].map((v, i) => (
              <div
                className="floating"
                style={{
                  height: 270,
                }}
              >
                <img alt="example" src="https://source.unsplash.com/random" />
                <Card
                  className="floater"
                  bodyStyle={{
                    margin: 0,
                    padding: 5,
                    paddingRight: 15,
                    paddingLeft: 15,
                  }}
                >
                  <Card.Meta
                    title={
                      <div>
                        <Typography.Title level={5} style={{ margin: 0 }}>
                          {v.name}
                        </Typography.Title>
                      </div>
                    }
                    description={
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            size="large"
                            src="https://source.unsplash.com/random"
                          />
                          <div>
                            <h3
                              style={{
                                marginBottom: 0,
                              }}
                            >
                              Lorum
                            </h3>
                            <Rate defaultValue={4} disabled />
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    }
                  />
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
        <FooterHeader />
      </>
    );
  }
}
export default Home;
