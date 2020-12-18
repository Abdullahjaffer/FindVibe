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
import AddBusiness from "../pages/add-business-1";
import AddBusinessSelectPackage from "../pages/add-business-2";
import AddReview from "../pages/add-review";

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
              <Route path="/add-business-1" component={AddBusiness} />
              <Route
                path="/add-business-2"
                component={AddBusinessSelectPackage}
              />
              <Route path="/add-review" component={AddReview} />

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
