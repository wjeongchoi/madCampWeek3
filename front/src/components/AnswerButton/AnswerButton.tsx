import React from "react";
import "./style.css";

interface AnswerButtonProps {
    onClick?: () => void; // Optional click handler
    label: string; // Text label for the button
  }

export const AnswerButton = ({ onClick, label }: AnswerButtonProps): JSX.Element => {
    return (
        <div className="answer-button" onClick={onClick}>
            <div className="text-wrapper">{label}</div>
        </div>
    );
};
