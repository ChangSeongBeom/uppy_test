import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import ImagesList from "./ImagesList";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/uploads">Upload</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/uploads" component={ImagesList} />
      </div>)
  }
}