import React, { useState } from "react";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import "./authentication.css";

const rightImage = require("../../../assets/images/png/businessMana.png");

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleForm = () => setIsLogin((prev) => !prev);
  return (
    <div className="auth-container">
      <div className="auth-left">
        {isLogin ? <Login /> : <Signup />}
        <div className="auth-toggle-form" onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Signup"
            : "Already have an account? Login"}
        </div>
      </div>

      <div className="auth-right">
        <img src={rightImage} alt="business woman" />
      </div>
    </div>
  );
};

export default Authentication;
