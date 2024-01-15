import React from "react";
import "./style.css";

interface InputTextProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'password'; // Optional prop to specify input type
}

export const InputText: React.FC<InputTextProps> = ({ label, value, onChange, type = 'text' }) => {
    return (
        <div className="input-text">
            <input 
                type={type} // Use the type prop here
                value={value} 
                onChange={onChange} 
                placeholder={label} 
                className="input-field"
            />
        </div>
    );
};
