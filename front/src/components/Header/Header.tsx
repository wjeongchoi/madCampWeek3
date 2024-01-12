import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Logo } from "../Logo";
import "./style.css";

interface Props {
  className: any;
  divClassName: any;
}

export const Header = ({ className, divClassName }: Props): JSX.Element => {
  const navigate = useNavigate();

  // Existing navigation functions
  const navigateToHome = () => navigate("/");
  const navigateToClassList = () => navigate("/classList");
  const navigateToClassRecomm = () => navigate("/classRecomm");

  // New navigation function for myPage
  const navigateToMyPage = () => navigate("/myPage");

  return (
    <div className={`header ${className}`}>
      <div className="frame">
        <div className={`text-wrapper-2 ${divClassName}`} onClick={navigateToHome}>홈</div>
        <div className="text-wrapper-3" onClick={navigateToClassList}>강의 목록</div>
        <div className="text-wrapper-4" onClick={navigateToClassRecomm}>강의 추천</div>
      </div>
      <div className="overlap" onClick={navigateToMyPage}>
        <img className="person-sharp" alt="Person sharp" src="/img/person-sharp-1.svg" />
      </div>
      <Logo className="logo-instance" onClick={navigateToHome} />
    </div>
  );
};
