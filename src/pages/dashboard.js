import {
  BarChartOutlined,
  DotChartOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Col, Menu, Row, Typography } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import FooterHeader from "../components/FooterHeader";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
class Dashboard extends React.Component {
  state = {
    barChart: true,
  };

  createActivity = () => (
    <div
      style={{
        marginBottom: 10,
      }}
    >
      <Row>
        <Col span={4}>
          <Badge dot={true}>
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              size={50}
            />
          </Badge>
        </Col>
        <Col span={14}>
          <p
            style={{
              fontSize: 16,
            }}
          >
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
            quam hendrerit, venenatis lectus.
          </p>
        </Col>
        <Col span={6}>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <p>9:11 am</p>
            <p>Friday, 29 Mar</p>
          </div>
        </Col>
      </Row>
    </div>
  );

  render() {
    return (
      <>
        <Row gutter={[16, 16]} type="flex">
          <Col span={8}>
            <Card>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 200,
                }}
              >
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size={100}
                />
              </div>
              <Menu>
                <Menu.Item>
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <NavLink exact to="/dashboard">
                      <Button
                        type="link"
                        style={{
                          fontSize: 18,
                        }}
                      >
                        Dashboard
                      </Button>
                    </NavLink>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <NavLink exact to="/messages">
                      <Button
                        type="link"
                        style={{
                          fontSize: 18,
                        }}
                      >
                        Inbox
                      </Button>
                    </NavLink>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <NavLink exact to="/reviews">
                      <Button
                        type="link"
                        style={{
                          fontSize: 18,
                        }}
                      >
                        Reviews
                      </Button>
                    </NavLink>
                  </div>
                </Menu.Item>
              </Menu>
            </Card>
          </Col>
          <Col span={16}>
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <h1
                    style={{
                      color: "grey",
                    }}
                  >
                    Views
                  </h1>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: 48,
                      color: "#17AAF9",
                    }}
                  >
                    64
                  </div>
                  <div
                    style={{
                      textAlign: "right",
                      color: "#17AAF9",
                    }}
                  >
                    <Button
                      type="link"
                      style={{
                        textAlign: "right",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      View More
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <h1
                    style={{
                      color: "grey",
                    }}
                  >
                    Reviews
                  </h1>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: 48,
                      color: "#17AAF9",
                    }}
                  >
                    19
                  </div>
                  <div
                    style={{
                      textAlign: "right",
                      color: "#17AAF9",
                    }}
                  >
                    <Button
                      type="link"
                      style={{
                        textAlign: "right",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      View More
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
            <div
              style={{
                marginTop: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Button
                  type="primary"
                  ghost
                  style={{
                    marginRight: 10,
                  }}
                >
                  Weekly
                </Button>
                <Button
                  type="primary"
                  ghost
                  style={{
                    marginRight: 10,
                  }}
                >
                  Monthly
                </Button>
                <Button
                  type="primary"
                  ghost
                  style={{
                    marginRight: 10,
                  }}
                >
                  Yearly
                </Button>
              </div>
              <div>
                <Button
                  type="primary"
                  ghost
                  icon={<BarChartOutlined />}
                  style={{
                    marginRight: 10,
                  }}
                  onClick={() =>
                    this.setState({
                      barChart: true,
                    })
                  }
                ></Button>
                <Button
                  type="primary"
                  ghost
                  icon={<DotChartOutlined />}
                  onClick={() =>
                    this.setState({
                      barChart: false,
                    })
                  }
                ></Button>
              </div>
            </div>
            <Card
              style={{
                marginTop: 20,
              }}
            >
              {this.state.barChart ? (
                <BarChart
                  width={800}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              ) : (
                <LineChart
                  width={800}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              )}
            </Card>
          </Col>
          <Col
            span={12}
            style={{
              padding: "0px 120px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1>Business Listing</h1>

              <Button type="primary" ghost>
                Edit Business
              </Button>
            </div>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://source.unsplash.com/random"
                  style={{
                    height: 200,
                    objectFit: "cover",
                  }}
                />
              }
              bodyStyle={{
                margin: 0,
                padding: 15,
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
                      Mr. Barber
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
                    <Typography.Text>Maple</Typography.Text>
                  </span>
                }
              />
            </Card>
          </Col>
          <Col
            span={12}
            style={{
              padding: "0px 120px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1>Activities</h1>
              <Button type="primary" ghost>
                New 5
              </Button>
            </div>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v) =>
              this.createActivity()
            )}
          </Col>
        </Row>
        <FooterHeader />
      </>
    );
  }
}
export default Dashboard;
