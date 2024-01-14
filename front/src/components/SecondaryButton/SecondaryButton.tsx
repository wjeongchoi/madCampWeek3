import React from "react";
import "./style.css";

interface SecondaryButtonProps {
  onClick?: () => void; // Optional click handler
  label: string; // Text label for the button
}

export const SecondaryButton = ({ onClick, label }: SecondaryButtonProps): JSX.Element => {
  return (
    <div className="secondary-button" onClick={onClick}>
      <div className="secondary-text-wrapper">{label}</div>
    </div>
  );
};
