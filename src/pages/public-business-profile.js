import {
  ClockCircleOutlined,
  FacebookFilled,
  HeartOutlined,
  MessageOutlined,
  ScissorOutlined,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Card, Col, Radio, Row, Tag } from "antd";
import React from "react";
import FooterHeader from "../components/FooterHeader";
import ProductHeader from "../components/ProductHeader";
import ReviewsColumn from "../components/ReviewsColumn";

class PublicBusinessProfile extends React.Component {
  render() {
    const options = [
      { label: "$", value: "Apple" },
      { label: "$$", value: "Pear" },
      { label: "$$$", value: "Orange" },
      { label: "$$$$", value: "Apple" },
    ];
    return (
      <>
        <ProductHeader />
        <Row gutter={[16, 16]} type="flex">
          <Col span={6}>
            <Card style={{ height: "100%" }}>
              <div
                style={{
                  fontSize: 16,
                  color: "grey",
                }}
              >
                MySite.com
                <br />
                123-456-7890
                <br />
                My Address Maple. 113333
                <br />
                St#455
                <br />
                <FacebookFilled /> <TwitterSquareFilled /> <YoutubeFilled />
                <br />
              </div>
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
              <br />
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Tag>
                  <ScissorOutlined />
                  Services
                </Tag>
                <HeartOutlined
                  style={{
                    color: "#17AAF9",
                    fontSize: 40,
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 24,
                  padding: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#17AAF9",
                }}
              >
                <MessageOutlined />
                {"  "} Message
              </div>
            </Card>
          </Col>
          <Col span={18}>
            <Card style={{ height: "100%" }}>
              <div
                style={{
                  fontSize: 16,
                  color: "#00000e",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse elit tortor, eleifend nec nulla nec, maximus
                convallis nisi. Integer vehicula eget purus a consequat. Sed
                ultricies tellus at elit vehicula feugiat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Vestibulum sed magna quis leo
                tincidunt vestibulum id in ipsum. Donec venenatis fringilla
                metus eget finibus. Etiam neque odio, semper non lacinia non,
                egestas in elit.
                <br />
                Phasellus velit orci, rhoncus sit amet molestie eu, gravida sed
                leo. Integer dui nunc, condimentum at consequat ac, tempus eget
                felis. Etiam semper nec est at viverra. Nam interdum nisl eu
                nunc efficitur molestie. Donec id velit quis nibh facilisis
                malesuada. Ut quis orci convallis, malesuada leo quis, convallis
                eros. Vivamus ornare pulvinar tellus non ullamcorper. Sed ornare
                pellentesque tortor, in vulputate mauris sagittis a. Quisque nec
                tortor vel libero feugiat venenatis. Donec accumsan commodo
                interdum. Maecenas suscipit nisi eget tortor eleifend, sed
                dignissim dui malesuada. Cras ac efficitur enim, in auctor
                nulla. Phasellus eget mattis dolor. In et elit elementum, luctus
                libero vitae, eleifend sem.
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <ReviewsColumn />
          </Col>
          {/* Add Review */}
          <Col span={18}>
            <Card
              style={{
                minHeight: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#17AAF9",
              }}
            >
              <div
                style={{
                  color: "#17AAF9",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    marginRight: 10,
                    fontSize: 24,
                  }}
                >
                  <ClockCircleOutlined />
                </div>
                <div
                  style={{
                    color: "grey",
                    fontSize: 16,
                  }}
                >
                  Hours of operation
                  <br />
                  Monday - Friday: 10:00am - 5pm
                  <br />
                  Saturday - Sunday: Closed
                </div>
              </div>
            </Card>
            <Card
              style={{
                minHeight: 200,
                marginTop: 10,
                backgroundColor: "lightgray",
              }}
            >
              <h2>FAQs</h2>
              <div
                style={{
                  color: "#17AAF9",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>
                  <h3>Is there something to ask?</h3>
                  <p
                    style={{
                      color: "#00000e",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse elit tortor,
                  </p>
                  <h3>Is there something to ask?</h3>
                  <p
                    style={{
                      color: "#00000e",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse elit tortor,
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <FooterHeader />
      </>
    );
  }
}
export default PublicBusinessProfile;
