import React from "react";
import "./style.css";

interface InputTextProps {
    label: string;
    value: string; // Prop for the input value
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Prop for the change event
}

export const InputText: React.FC<InputTextProps> = ({ label, value, onChange }) => {
    return (
        <div className="input-text">
            <input 
                type="text" 
                value={value} 
                onChange={onChange} 
                placeholder={label} // Use label as the placeholder
                className="input-field" // You can add a class for styling
            />
        </div>
    );
};
