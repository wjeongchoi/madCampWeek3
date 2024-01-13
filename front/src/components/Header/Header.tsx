import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Logo } from "../Logo";
import "./style.css";
// Add a new prop to the interface for the active page
interface Props {
  className: any;
  divClassName: any;
  activePage?: "home" | "classList" | "classRecomm"; // Specify the possible values for activePage
}

export const Header = ({
  className,
  divClassName,
  activePage,
}: Props): JSX.Element => {
  const navigate = useNavigate();

  const isActive = (pageName: string) =>
    activePage === pageName ? "active" : "";

  return (
    <div className={`header ${className}`}>
      <Logo className="logo-instance" onClick={() => navigate("/")} />
      <div className="frame">
        <div
          className={`inactive ${divClassName} ${isActive("home")}`}
          onClick={() => navigate("/")}
        >
          홈
        </div>
        <div
          className={`inactive ${divClassName} ${isActive("classList")}`}
          onClick={() => navigate("/classList")}
        >
          강의 목록
        </div>
        <div
          className={`inactive ${divClassName} ${isActive(
            "classRecomm"
          )}`}
          onClick={() => navigate("/classRecomm")}
        >
          강의 추천
        </div>
      </div>
      <div className="overlap" onClick={() => navigate("/myPage")}>
        <img
          className="person-sharp"
          alt="Person sharp"
          src="/img/person-sharp-1.svg"
        />
      </div>
    </div>
  );
};
