import { AimOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Row, Select } from "antd";
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <Select
          // showSearch
          style={{
            width: 400,
          }}
          placeholder="What are you looking for?"
          dropdownRender={() => (
            <div
              style={{
                padding: 10,
              }}
            >
              <Row gutter={[16, 16]}>
                {[
                  "Services",
                  "Online Shopping",
                  "Rental",
                  "Remote",
                  "Camping",
                  "Food",
                ].map((v) => (
                  <Col span={12}>
                    <Button type="primary" ghost block>
                      {v}
                    </Button>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        ></Select>
        <Select
          style={{
            width: 150,
          }}
          placeholder="Location"
        >
          <Select.Option>New York</Select.Option>
          <Select.Option>Brooklyn</Select.Option>
          <Select.Option>Long Island City</Select.Option>
          <Select.Option>
            Locate Me <AimOutlined />
          </Select.Option>
        </Select>
        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
          size="large"
        />
      </>
    );
  }
}

export default SearchBar;
