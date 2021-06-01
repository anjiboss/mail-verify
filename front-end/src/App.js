import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import Routes
import Home from "./Routes/Home";
import Register from "./Routes/Register";
import Verify from "./Routes/Verify";
import Error from "./Routes/Error";
// Import Component

import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>

        <Route path="/verify">
          <Verify></Verify>
        </Route>

        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
