import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} />

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.loginText}>
            {props.login}
            <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
