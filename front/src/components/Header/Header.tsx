import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Logo } from "../Logo";
import "./style.css";

interface Props {
  className: any;
}

export const Header = ({ className }: Props): JSX.Element => {
  const navigate = useNavigate(); // Create navigate function

  const navigateToClassList = () => {
    navigate('/classList'); // Navigate to the ClassList screen
  };

  return (
    <div className={`header ${className}`}>
      <div className="frame-2">
        <div className="text-wrapper-2">홈</div>
        <div className="text-wrapper-3" onClick={navigateToClassList}>강의 목록</div> {/* Attach onClick event */}
        <div className="text-wrapper-4">강의 추천</div>
      </div>
      <div className="my-page" />
      <Logo className="logo-instance" />
    </div>
  );
};
