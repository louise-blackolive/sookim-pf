import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Blog } from "./pages";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Blog} />
      </React.Fragment>
    );
  }
}

export default App;
