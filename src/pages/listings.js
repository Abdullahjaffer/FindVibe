import { Row, Typography, Col, Button, Card, Rate } from "antd";
import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { simpleAction } from "../Redux/Actions/simpleAction";
import {
  CompassOutlined,
  AppstoreOutlined,
  HeartOutlined,
  MessageOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import FooterHeader from "../components/FooterHeader";
import CategoryButtons from "../components/categoryButtons";
class Listings extends React.Component {
  createCard = () => (
    <Col span={12}>
      <Card
        bodyStyle={{
          padding: 0,
          height: 200,
        }}
      >
        <Row justify={"start"}>
          <Col span={12}>
            <img
              src="https://source.unsplash.com/random"
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 16,
              }}
            />
          </Col>
          <Col
            span={12}
            style={{
              padding: 10,
            }}
          >
            <Typography.Title level={3}>A&Z Plumbing</Typography.Title>
            <Rate defaultValue={5} disabled />

            <Button
              type="link"
              size="large"
              icon={
                <HeartOutlined
                  style={{
                    color: "#17AAF9",
                  }}
                />
              }
            ></Button>
            <Button
              type="link"
              size="large"
              icon={
                <MessageOutlined
                  style={{
                    color: "#17AAF9",
                  }}
                />
              }
            />
            <Typography.Title level={5}>
              Great Service Good Prices!
            </Typography.Title>
          </Col>
        </Row>
      </Card>
    </Col>
  );

  render() {
    return (
      <>
        <Typography.Title
          level={3}
          style={{
            textAlign: "center",
          }}
        >
          What are you looking for? {<SearchBar />}
        </Typography.Title>
        <CategoryButtons />
        <div
          style={{
            width: "100%",
            textAlign: "right",
            marginTop: 50,
          }}
        >
          <Button type="primary" ghost size="large">
            Open Now
          </Button>{" "}
          <Button type="primary" ghost size="large">
            Near me
          </Button>{" "}
          <Button
            icon={<CompassOutlined />}
            size="large"
            type="primary"
            ghost
            shape="circle"
          ></Button>{" "}
          <Button
            icon={<AppstoreOutlined />}
            size="large"
            type="primary"
            ghost
            shape="circle"
          ></Button>
        </div>
        <Row
          style={{
            marginTop: 50,
          }}
          gutter={[16, 16]}
        >
          {[0, 0, 0, 0, 0, 0].map((v) => this.createCard())}
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Button
            icon={<ArrowLeftOutlined />}
            size="large"
            type="primary"
            ghost
            shape="circle"
          ></Button>
          <Button
            icon={<ArrowRightOutlined />}
            size="large"
            type="primary"
            ghost
            shape="circle"
          ></Button>
        </div>
        <FooterHeader />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  simpleAction: (v) => dispatch(simpleAction(v)),
});

export default connect(null, mapDispatchToProps)(Listings);
