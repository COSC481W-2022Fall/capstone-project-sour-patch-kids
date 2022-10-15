import "./App.css";
import Navbar from "./Pages/navbar";
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Helpme from "./Pages/ListOfUsers";
import CreateStockroom from "./Pages/CreateStockRoom";
import React from "react";

function App() {
  return (
    //<Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
          <Route path="/list" component={Helpme} />
          <Route path="/createStockRoom" component={CreateStockroom} />
          <Route path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
    //</Router>
  );
}
export default App;