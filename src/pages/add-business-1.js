import { UploadOutlined } from "@ant-design/icons";
import {
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

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: "1",
      name: "xxx.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/xxx.png",
    },
    {
      uid: "2",
      name: "yyy.png",
      status: "done",
      url: "http://www.baidu.com/yyy.png",
    },
    {
      uid: "3",
      name: "zzz.png",
      status: "error",
      response: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/zzz.png",
    },
  ],
};
class AddBusiness extends React.Component {
  render() {
    const options = [
      { label: "$", value: "Apple" },
      { label: "$$", value: "Pear" },
      { label: "$$$", value: "Orange" },
      { label: "$$$$", value: "Apple" },
    ];
    return (
      <>
        <Typography.Title
          style={{
            color: "#17AAF9",
            textAlign: "center",
          }}
          level={3}
        >
          Create Your Business Account
        </Typography.Title>
        <div
          style={{
            padding: 50,
          }}
        >
          <Row gutter={[32]}>
            <Col span={8}>
              <Input
                placeholder="Email"
                style={{
                  marginBottom: 10,
                }}
              />
              <Input.TextArea
                rows={5}
                placeholder="Description"
                style={{
                  marginBottom: 10,
                }}
              />
              <Input
                placeholder="Rate"
                style={{
                  marginBottom: 10,
                }}
              />
              <Select
                placeholder="Category"
                style={{
                  marginBottom: 10,
                  width: "100%",
                }}
              />
            </Col>
            <Col span={8}>
              <Input
                placeholder="Business Name"
                style={{
                  marginBottom: 10,
                }}
              />
              <Row>
                <Col span={12}>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />} type="primary" ghost>
                      Upload
                    </Button>
                  </Upload>
                </Col>
                <Col span={12}>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />} type="primary" ghost>
                      Upload
                    </Button>
                  </Upload>
                </Col>
              </Row>
              <br />
              Hours:{" "}
              <span style={{ float: "right" }}>
                <Radio>24-hours</Radio> <Radio>Remote</Radio>
              </span>
              <br />
              <Radio.Group
                options={options}
                // onChange={this.onChange3}
                // value={value3}
                optionType="button"
                style={{
                  width: "100%",
                  marginTop: 20,
                }}
              />
            </Col>
            <Col span={8}>
              <Input
                placeholder="Website"
                style={{
                  marginBottom: 10,
                }}
              />
              <Input
                placeholder="Location"
                style={{
                  marginBottom: 10,
                }}
              />
            </Col>
          </Row>
          <Divider />
          <Row justify="end">
            <Col
              span={6}
              style={{
                textAlign: "center",
              }}
            >
              <Checkbox>Terms and Privacy</Checkbox>
              <br />
              <Button
                type="primary"
                style={{
                  marginTop: 10,
                }}
                onClick={() => {
                  console.log(this.props.history.push("/add-business-2"));
                }}
              >
                Save and Continue
              </Button>
              <Button type="link">Have a business account? Login here.</Button>
            </Col>
          </Row>
        </div>
        <FooterHeader />
      </>
    );
  }
}
export default AddBusiness;
