import "./App.css";
// import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInSlide from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignInSlide} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
