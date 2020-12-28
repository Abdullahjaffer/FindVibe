import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import AddBusiness from "../pages/add-business-1";
import AddBusinessSelectPackage from "../pages/add-business-2";
import AddReview from "../pages/add-review";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Listings from "../pages/listings";
import Login from "../pages/login";
import Messages from "../pages/messages";
import PublicBusinessProfile from "../pages/public-business-profile";
import Reviews from "../pages/reviews";
import "./App.less";

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
              <Route
                path="/business-profile"
                component={PublicBusinessProfile}
              />
              <Route path="/listings" component={Listings} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/login" component={Login} />
              <Route path="/add-business-1" component={AddBusiness} />
              <Route
                path="/add-business-2"
                component={AddBusinessSelectPackage}
              />
              <Route path="/add-review" component={AddReview} />
              <Route path="/messages" component={Messages} />
              <Route path="/dashboard" component={Dashboard} />

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
