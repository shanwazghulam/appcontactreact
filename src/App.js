import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/interface/Header";
import List from "./component/contact/List";
import AddContact from "./component/contact/AddContact";
import About from "./component/pages/About";
import Error from "./component/pages/Error";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              {/* <AddContact /> */}
              <Switch>
                <Route exact path="/list" component={List} />
                <Route exact path="/" component={List} />
                <Route exact path="/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
