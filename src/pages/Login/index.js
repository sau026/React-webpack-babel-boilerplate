import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import InputPrimary from "../../components/Input";
import ButtonPrimary from "../../components/Button";
import CONSTANT from "../../assets/constant/constant";
import Image from "../../assets/images";
import "./index.scss";

const Login = (props) => {
  const [userName, setUserName] = useState(null);
  const [userPass, setUserPass] = useState(null);
  const [loader, setLoader] = useState(false)

  return (
    <div className="login__container">
      <div className="form__control">
        <label>{CONSTANT.USERNAME}</label>
        <InputPrimary
          type="text"
          name="email"
          placeholder="Enter your username"
        />
      </div>
      <div className="form__control">
        <label>{CONSTANT.PASSWORD}</label>
        <InputPrimary
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="form__control">
        <ButtonPrimary label={CONSTANT.LOGIN} loader={loader}></ButtonPrimary>
      </div>
      <span className="not_reg">Not registered yet?<Link to="/register" className="signUp__link">&nbsp;Sign Up</Link></span>
    </div>
  );
};

export default Login;
