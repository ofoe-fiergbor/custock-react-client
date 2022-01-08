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
    {/* <h1 className="mobile">App only available in destop only.</h1> */}
      <div className="auth-left">
        <h1>Custock</h1>
        {isLogin ? <Login /> : <Signup login={(a) => setIsLogin(a)} />}
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
