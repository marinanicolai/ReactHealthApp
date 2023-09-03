import "./App.css";
// import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInSlide from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import MedicineForm from "./components/add-medicine/MedicineForm";
import React, { createContext } from "react";
import { useState } from "react";
import { AppContextProvider } from "./components/AppContext";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-13-53-102-156.eu-north-1.compute.amazonaws.com:8080",
  headers: {
    "Access-Control-Allow-Origin": "true", // You can set default headers here
    // Other default headers if needed
  },
});
function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={SignInSlide} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/add-medicine" component={MedicineForm} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
}
export { instance };
export default App;
