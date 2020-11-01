import React from "react";
import logo from "../logo.svg";
import "./App.less";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/user";
import About from "../pages/about";
import Post from "../pages/posts";
import { connect } from "react-redux";
import Listings from "../pages/listings";
import { Button, Layout } from "antd";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import Reviews from "../pages/reviews";
import Login from "../pages/login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <TopBar />
          <Layout.Content
            style={{
              padding: "30px 50px",
            }}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/listings" component={Listings} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/login" component={Login} />
              <Route component={() => <h1>Not found</h1>} />
            </Switch>
          </Layout.Content>
          <Footer />
        </Layout>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.simpleReducer.post,
});

export default connect(mapStateToProps)(App);
