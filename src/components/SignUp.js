import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const SignUp = (e) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleRegister = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    axios({
      method: "post",
      url: "http://localhost:5000/user/addUser",
      data: {
        FirstName: firstName,
        Email: email,
        Password: password,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    console.log(email);
    console.log(password);
    axios({
        method:"post",
        url:"http://localhost:5000/user/signin",
        data: {
            Email:email,
            Password: password
        }
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
  };

  const reg = (
    <form className="register-form" autoComplete={"off"}>
      <div className="gridy">
        <input
          type="text"
          placeholder="*First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="*Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="*Email Address"
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="gridy">
        <input
          type="password"
          placeholder="*Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="*Confirm Password"
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}
        />
        <button className="register-btn" onClick={handleRegister}>
          Join Now
        </button>
      </div>
    </form>
  );
  const log = (
    <form className="log-form" autoComplete={"off"}>
      <div className="gridy">
        <input
          type="email"
          placeholder="*Email Address"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete={"off"}
        />
        <input
          type="password"
          placeholder="*Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-btn" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </form>
  );
  return (
    <main>
      <Navbar />

      <div className="register-content">
        <button className="sign-toggle-box">
          <span
            className={`sign-toggle sign-toggle-${hasAccount}`}
            onClick={(e) => setHasAccount(!hasAccount)}
          ></span>
        </button>
        {hasAccount ? log : reg}
      </div>
      <Footer />
    </main>
  );
};

export default SignUp;
