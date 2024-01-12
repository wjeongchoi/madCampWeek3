/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
}

export const SidebarButton = ({ property1, className }: Props): JSX.Element => {
  return (
    <div className={`sidebar-button ${property1} ${className}`}>
      <div className="text-wrapper">All Lectures</div>
    </div>
  );
};

SidebarButton.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
