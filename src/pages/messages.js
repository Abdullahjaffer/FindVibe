import { FileAddFilled, MessageFilled } from "@ant-design/icons";
import { Badge, Button, Card, Col, Input, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import FooterHeader from "../components/FooterHeader";

class Messages extends React.Component {
  createTagRecieved = () => (
    <Card
      style={{
        marginBottom: 10,
      }}
      bodyStyle={{
        padding: 10,
      }}
    >
      <Row>
        <Col span={4}>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={50}
          />
        </Col>
        <Col span={16}>
          <h2>Amy Wisber</h2>
          <p>Sed ac nunc et fringilla.</p>
        </Col>
        <Col span={4}>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <p>9:11 am</p>
            <Badge count={1} />
          </div>
        </Col>
      </Row>
    </Card>
  );

  createMessage = (i) => (
    <Row>
      {i % 2 == 0 && (
        <Col span={2}>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={50}
          />
        </Col>
      )}
      <Col span={22}>
        <Card
          style={{
            marginBottom: 10,
          }}
          bodyStyle={{
            padding: 10,
          }}
        >
          <p>
            Proin quis orci consequat, sollicitudin justo quis, vehicula neque.
          </p>
        </Card>
      </Col>
      {i % 2 !== 0 && (
        <Col span={2}>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={50}
          />
        </Col>
      )}
    </Row>
  );

  render() {
    return (
      <>
        <Row gutter={[16, 16]} type="flex">
          <Col span={8}>
            <Card
              style={{
                minHeight: "100vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  marginBottom: 20,
                }}
              >
                <Input.Search
                  style={{
                    maxWidth: 300,
                  }}
                />{" "}
                <MessageFilled
                  style={{
                    fontSize: 32,
                  }}
                />
              </div>
              {[0, 0, 0].map((v) => this.createTagRecieved())}
            </Card>
          </Col>
          <Col span={16}>
            <Card
              style={{
                minHeight: "100vh",
              }}
            >
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) =>
                this.createMessage(i)
              )}
              <Input
                size="large"
                addonAfter={<Button type="link">Send</Button>}
                addonBefore={<Button type="link" icon={<FileAddFilled />} />}
              />
            </Card>
          </Col>
        </Row>
        <FooterHeader />
      </>
    );
  }
}
export default Messages;
