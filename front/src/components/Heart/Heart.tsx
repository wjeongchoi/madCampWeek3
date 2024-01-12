/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Property1True } from "../../icons/Property1True";
import "./style.css";

interface Props {
  property1: boolean;
}

export const Heart = ({ property1 }: Props): JSX.Element => {
  return <Property1True className="property-true" color={!property1 ? "#D0D0D0" : "#FB4B6D"} />;
};

Heart.propTypes = {
  property1: PropTypes.bool,
};
