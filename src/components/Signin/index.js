import React, { useEffect, useRef, useState } from "react";
import {gsap} from "gsap";
import "./signin.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { x: "0" }, {x: "-1000"});
  })

  return (
    <div class="flex-container">
      <div class="content-container">
        <div class="form-container">
          <form onSubmit={submitHandler}>
            <div class="form-inner">
              <h2 id="login-greetings" ref={boxRef}>Hey, Welcome Back!</h2> <br />
              {/* ERROR! */}
              <div class="subtitle">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email id"
                  autoComplete="off"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                />
                
              </div>
              <div class="subtitle">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                />
              </div>
                  <a href="/" className="forgot-pass">Forgot password?</a>
                  <button type="submit" className="submit-btn">Login</button>
              {/* <input type="submit" value="LOGIN" class="submit-btn" /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
