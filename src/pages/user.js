import React from "react";
class User extends React.Component {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>Users</h1>
        <p>{params && params.id}</p>
      </div>
    );
  }
}
export default User;
