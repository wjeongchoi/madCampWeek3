import React from "react";
import "./style.css";

interface PrimaryButtonProps {
    onClick?: () => void; // Optional click handler
    label: string; // Text label for the button
  }

export const PrimaryButton = ({ onClick, label }: PrimaryButtonProps): JSX.Element => {
    return (
        <div className="primary-button" onClick={onClick}>
            <div className="text-wrapper">{label}</div>
        </div>
    );
};
