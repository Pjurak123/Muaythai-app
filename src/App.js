import React, { useState } from "react";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Signin";

function App() {
  const userUser = {
    email: "user@gmail.com",
    password: "user123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == userUser.email &&
      details.password == userUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        password: details.password,
      });
    } else {
      console.log("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
