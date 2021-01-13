import React from "react";
import {Link} from 'react-router-dom'
import classNames from "classnames";
import { page } from "../../router";
import "./Logo.scss";

const Logo = ({ styles }) => {
  return (
    <Link to={page.home} className={classNames("Logo", styles)}>
      Mimini
    </Link>
  );
};

export default Logo;
