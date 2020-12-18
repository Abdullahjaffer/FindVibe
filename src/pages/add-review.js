import {
  CameraOutlined,
  FileImageOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Input,
  Radio,
  Rate,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import FooterHeader from "../components/FooterHeader";
import ProductHeader from "../components/ProductHeader";
import ReviewsColumn from "../components/ReviewsColumn";

class AddReview extends React.Component {
  render() {
    return (
      <>
        <ProductHeader />
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <ReviewsColumn />
          </Col>
          {/* Add Review */}
          <Col span={18}>
            <Card
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    size={50}
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                  <h2
                    style={{
                      marginBottom: 0,
                    }}
                  >
                    Leave a review for Mr. Barber Shop
                  </h2>
                </div>
              }
            >
              <div
                style={{
                  padding: 20,
                }}
              >
                <h3>What's Your Rating ?</h3>
                <Rate
                  defaultValue={5}
                  allowHalf
                  style={{
                    marginBottom: 10,
                  }}
                />
                <h3>Write A Review</h3>
                <Input.TextArea
                  rows={4}
                  style={{
                    marginBottom: 10,
                  }}
                />
                <h3>Upload Photos</h3>
                <Button
                  icon={<CameraOutlined />}
                  style={{
                    borderRadius: 5,
                    marginRight: 5,
                  }}
                ></Button>
                <Button
                  icon={<FileImageOutlined />}
                  style={{
                    borderRadius: 5,
                    marginRight: 5,
                  }}
                ></Button>
                <Button
                  icon={<FileImageOutlined />}
                  style={{
                    borderRadius: 5,
                    marginRight: 5,
                  }}
                ></Button>
              </div>
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <Button type={"primary"}>Add Review</Button>
              </div>
            </Card>
          </Col>
        </Row>
        <FooterHeader />
      </>
    );
  }
}
export default AddReview;
