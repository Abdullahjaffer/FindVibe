import { AimOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Avatar,
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
import React from "react";
import FooterHeader from "../components/FooterHeader";

class ReviewsColumn extends React.Component {
  render() {
    return (
      <>
        {/* <Card> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3>Reviews</h3>
            <Rate defaultValue={5} disabled />
          </div>
          <Button type="link">Add Review</Button>
        </div>
        {[0, 0, 0, 0, 0].map((v) => (
          <Card
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Card.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Max Elto"
              description={
                <div>
                  <Rate defaultValue={4.5} disabled allowHalf />
                  <br />
                  This is the description
                </div>
              }
            />
          </Card>
        ))}
        {/* </Card> */}
      </>
    );
  }
}
export default ReviewsColumn;
