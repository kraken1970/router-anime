import React from "react";
import { useRouteMatch } from "react-router-dom";
import {page} from '../../router'
import Logo from "../Logo/Logo";
import "./Footer.scss";

const Footer = () => {
  const match = useRouteMatch(page.signUp);

  if (match) {
    return null;
  }

  return (
    <footer className="Footer">
      <Logo styles="Footer__logo" />
    </footer>
  );
};

export default Footer;
