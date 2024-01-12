import React from "react";
import "./style.css";

interface LogoProps {
  onClick?: () => void; // Optional click handler
  className?: string; // Optional additional class name
}

export const Logo = ({ onClick, className = "" }: LogoProps): JSX.Element => {
  return (
    <div className={`logo ${className}`} onClick={onClick}> {/* Use the onClick and className props */}
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
