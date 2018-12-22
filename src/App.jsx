import React, { Component } from "react";
import Nav from "./components/nav";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import ListContact from "./components/ListContact";
import AddContact from "./components/AddContact";
import EditContact from "./components/editcontact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listContact" component={ListContact} />
            <Route path="/addContact" component={AddContact} />
            <Route
              path="/editcontact/:_id"
              render={props => <EditContact _id={props.match.params._id} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
