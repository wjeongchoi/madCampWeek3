import React from "react";
import "./style.css";

interface InputTextProps {
    label: string; // Prop for the text label
}

export const InputText = ({ label }: InputTextProps): JSX.Element => {
    return (
        <div className="input-text">
            <div className="text-wrapper">{label}</div>
        </div>
    );
};
