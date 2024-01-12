/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Property1True = ({ color = "#FB4B6D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-1-true ${className}`}
      fill="none"
      height="31"
      viewBox="0 0 31 31"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.5 27.125C15.1111 27.1245 14.7314 27.007 14.4102 26.7878C9.65178 23.5576 7.59137 21.3428 6.4549 19.9581C4.03303 17.0064 2.87356 13.976 2.90625 10.6944C2.9444 6.93383 5.96145 3.875 9.6318 3.875C12.3007 3.875 14.1492 5.37838 15.2257 6.63049C15.2598 6.66975 15.302 6.70124 15.3493 6.72281C15.3966 6.74439 15.448 6.75556 15.5 6.75556C15.552 6.75556 15.6034 6.74439 15.6507 6.72281C15.698 6.70124 15.7402 6.66975 15.7743 6.63049C16.8508 5.37717 18.6993 3.875 21.3682 3.875C25.0386 3.875 28.0556 6.93383 28.0938 10.695C28.1264 13.9772 26.9658 17.0076 24.5451 19.9587C23.4086 21.3434 21.3482 23.5582 16.5898 26.7884C16.2686 27.0074 15.8888 27.1247 15.5 27.125Z"
        fill={color}
      />
    </svg>
  );
};

Property1True.propTypes = {
  color: PropTypes.string,
};
