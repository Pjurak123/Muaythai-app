import React, { useState } from "react";
import "./signin.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div class="flex-container">
      <div class="content-container">
        <div class="form-container">
          <form onSubmit={submitHandler}>
            <div class="form-inner">
              <h2>Login</h2> <br />
              {/* ERROR! */}
              <div class="subtitle">
                <label htmlFor="email">Korisničko ime:</label> <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                />
              </div>
              <div class="subtitle">
                <label htmlFor="password">Lozinka:</label> <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                />
              </div>{" "}
              <br />
              <input type="submit" value="LOGIN" class="submit-btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
