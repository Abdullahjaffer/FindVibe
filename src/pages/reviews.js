import { Row, Typography, Col, Button, Card, Rate, Avatar } from "antd";
import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { simpleAction } from "../Redux/Actions/simpleAction";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import FooterHeader from "../components/FooterHeader";
import CategoryButtons from "../components/categoryButtons";
class Reviews extends React.Component {
  createCard = () => (
    <Col span={8}>
      <Card
        cover={
          <img
            src="https://source.unsplash.com/random"
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: 16,
            }}
          />
        }
      >
        <Typography.Title level={3}>A&Z Plumbing</Typography.Title>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Avatar
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <div
            style={{
              marginLeft: 15,
            }}
          >
            <Typography.Title
              level={5}
              style={{
                marginBottom: 0,
              }}
            >
              Max Elto
            </Typography.Title>
            <Rate defaultValue={5} disabled />
          </div>
        </div>

        <Typography.Title level={5} type="secondary">
          Great Service Good Prices!
        </Typography.Title>
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
        <div>
          <Typography.Title level={3}>Ratings:</Typography.Title>
          {[5, 4, 3, 2, 1].map((v) => (
            <Button
              type={"primary"}
              ghost
              style={{
                paddingTop: 0,
                marginRight: 10,
              }}
            >
              <div>
                <Rate defaultValue={v} disabled />
              </div>
            </Button>
          ))}
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

export default connect(null, mapDispatchToProps)(Reviews);
