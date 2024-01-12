/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Logo } from "../Logo";
import "./style.css";

interface Props {
  className: any;
  divClassName: any;
}

export const Header = ({ className, divClassName }: Props): JSX.Element => {
  return (
    <div className={`header ${className}`}>
      <div className="frame">
        <div className={`text-wrapper-2 ${divClassName}`}>홈</div>
        <div className="text-wrapper-3">강의 목록</div>
        <div className="text-wrapper-4">강의 추천</div>
      </div>
      <div className="overlap">
        <img className="person-sharp" alt="Person sharp" src="/img/person-sharp-1.svg" />
      </div>
      <Logo className="logo-instance" />
    </div>
  );
};
