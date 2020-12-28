import { AimOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Divider,
  Input,
  Radio,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import React from "react";
import FooterHeader from "../components/FooterHeader";

class ProductHeader extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            height: 350,
            position: "relative",
            marginBottom: 80,
          }}
        >
          <img
            alt="example"
            src="https://source.unsplash.com/random"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: 50,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "10%",
              zIndex: 10,
            }}
          >
            <Avatar
              size={120}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              style={{
                background: "#ffffff",
                transform: "translateY(-60px)",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 130,
                zIndex: 0,
                fontSize: 32,
                color: "grey",
                width: 400,
              }}
            >
              Mr. Barber Shop
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: "10%",
              zIndex: 10,
              fontSize: 32,
              color: "grey",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Button
                type="primary"
                style={{
                  marginRight: 30,
                }}
              >
                Edit listing
              </Button>
              <AimOutlined />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ProductHeader;
