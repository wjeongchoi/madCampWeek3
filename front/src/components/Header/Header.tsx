import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Logo } from "../Logo";
import "./style.css";
interface Props {
  className: any;
  activePage?: "home" | "classList" | "classRecomm"; // Specify the possible values for activePage
}

export const Header = ({ className, activePage }: Props): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (!userID && window.location.pathname === "/myPage") {
      alert('로그인이 필요한 서비스입니다.');
      navigate("/login");
    }
  }, [navigate]);

  const isActive = (pageName: string) => activePage === pageName ? "active" : "";

  return (
    <div className={`header ${className}`}>
      <Logo className="logo-instance" onClick={() => navigate("/")} />
      <div className="headerframe">
        <div
          className={`inactive ${isActive("home")}`}
          onClick={() => navigate("/")}
        >
          홈
        </div>
        <div
          className={`inactive ${isActive("classList")}`}
          onClick={() => navigate("/classList")}
        >
          강의 목록
        </div>
        <div
          className={`inactive ${isActive(
            "classRecomm"
          )}`}
          onClick={() => navigate("/classRecomm")}
        >
          강의 추천
        </div>
      </div>
      <div className="headeroverlap" onClick={() => navigate("/myPage")}>
        <img
          className="person-sharp"
          alt="Person sharp"
          src="/img/person-sharp-1.svg"
        />
      </div>
    </div>
  );
};
