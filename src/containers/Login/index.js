import React from "react";
import {Link} from 'react-router-dom';
import Styles from "./styles";
import Animation from "../../components/Animation";
import loginAnimation from "../../components/Animation/json/login.json"
import { Divider, Checkbox } from "antd";

const Login = () => {
  return (
    <Styles>
      <div className={"login-wrapper"}>
        <div className={"login-content"}>
          <h1>Login</h1>
          <h4>See users, groups and namesapces</h4>
          <Divider>IDP Service</Divider>
          <label className={"login-mt"}>Email*</label>
          <input type="text" placeholder="mail@example.com"/>
          <label>Password*</label>
          <input className={"login-mb"} type="password" placeholder="Min. 8 character"/>
          <Checkbox>Remember Me</Checkbox>
          <Link to="/dashboard">
            <button>Login</button>
          </Link>
        </div>
        <div className={"login-animation-wrapper"}>
          <Animation animation={loginAnimation} loop={true} width={"300px"} height={"300px"}/>
        </div>
      </div>
    </Styles>
  );
}

export default Login;