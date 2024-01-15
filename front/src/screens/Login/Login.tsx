import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { SecondaryButton } from "../../components/SecondaryButton";
import { postRequest } from "../../axios";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    postRequest(
      "/user/login/",
      { id: username, pw: password },
      (response) => {
        // Handle success
        console.log("Login successful:", response);
        alert('로그인 성공');
        navigate("/"); // Redirect to home or dashboard page
      },
      (error) => {
        // Handle error
        console.error("Login failed:", error);
        alert(error);
        // Display an error message to the user
      }
    );
  };

  const handleSignUpClick = () => {
    navigate("/signUp");
  };

  return (
    <div className="login">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className="text-wrapper-5">로그인</div>
              <InputText
                label="아이디"
                onChange={handleUsernameChange}
                value={username}
              />
              <InputText
                label="비밀번호"
                onChange={handlePasswordChange}
                value={password}
                type="password"
              />
            </div>
            <SecondaryButton label="로그인" onClick={handleLoginClick} />
            <div className="signup" onClick={handleSignUpClick}>
              회원가입
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
