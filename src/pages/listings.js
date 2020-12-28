import {
  AppstoreOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CompassOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Rate, Row, Typography } from "antd";
import { Map, Marker } from "pigeon-maps";
import React from "react";
import { connect } from "react-redux";
import CategoryButtons from "../components/categoryButtons";
import FooterHeader from "../components/FooterHeader";
import SearchBar from "../components/SearchBar";
import { simpleAction } from "../Redux/Actions/simpleAction";

class Listings extends React.Component {
  state = {
    showMap: false,
  };

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
    const map = (
      <Map
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={12}
        provider={(x, y, z) =>
          `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`
        }
      >
        <Marker
          anchor={[50.874, 4.6947]}
          payload={1}
          onClick={({ event, anchor, payload }) => {}}
        />

        {/* <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
          <img src="pigeon.jpg" width={240} height={158} alt="" />
        </Overlay> */}
      </Map>
    );
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
            onClick={() => this.setState({ showMap: true })}
          ></Button>{" "}
          <Button
            icon={<AppstoreOutlined />}
            size="large"
            type="primary"
            ghost
            shape="circle"
          ></Button>
        </div>
        <Row>
          <Col span={this.state.showMap ? 12 : 24}>
            <Row
              style={{
                marginTop: 50,
              }}
              gutter={[16, 16]}
            >
              {[0, 0, 0, 0, 0, 0].map((v) => this.createCard())}
            </Row>
          </Col>
          {this.state.showMap && (
            <Col
              span={12}
              style={{
                padding: 20,
              }}
            >
              {map}
            </Col>
          )}
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
