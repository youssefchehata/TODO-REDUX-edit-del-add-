import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/ListContact" className="waves-effect waves-light btn">
          ListContact
        </Link>
        <Link to="/AddContact" className="waves-effect waves-light btn">
          AddContact
        </Link>
      </div>
    );
  }
}

export default Home;
