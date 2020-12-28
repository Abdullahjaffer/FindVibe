import { Row, Col, Button } from "antd";
import React from "react";

class CategoryButtons extends React.Component {
  render() {
    const ButtonsArray = [
      "Food",
      "Plumber",
      "Service",
      "Local",
      "Bar",
      "Camping",
      "Delivery",
      "Shopping",
      "Freelance",
      "Remote",
      "Classes",
      "Travel",
    ];
    return (
      <Row
        gutter={[16, 16]}
        style={{
          marginTop: 50,
        }}
      >
        {ButtonsArray.map((v) => (
          <Col span={4}>
            <Button type="primary" ghost size="large" block>
              {v}
            </Button>
          </Col>
        ))}
      </Row>
    );
  }
}

export default CategoryButtons;
