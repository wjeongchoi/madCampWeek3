/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Logo = ({ className }: Props): JSX.Element => {
  return (
    <div className={`logo ${className}`}>
      <div className="overlap-group">
        <div className="text-wrapper">AIpple</div>
        <div className="group">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="div" />
            <div className="rectangle-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
