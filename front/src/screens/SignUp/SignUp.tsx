import React, { useState } from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { SecondaryButton } from "../../components/SecondaryButton";
import { postRequest } from "../../axios";
import { useNavigate } from "react-router-dom";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSignUpClick = () => {
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    postRequest(
      "user/signup/",
      { id: username, pw: password, name: name },
      (response) => {
        // Handle success
        console.log("Signup successful:", response);
        // Redirect or show success message
        navigate("/login"); // Redirect to home or dashboard page
      },
      (error) => {
        // Handle error
        console.error("Signup failed:", error);
        // Display an error message to the user
      }
    );
  };
  return (
    <div className="sign-up">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="frame-2">
          <div className="frame-3">
            <div className="text-wrapper-5">회원가입</div>
            <div className="frame-4">
              <InputText
                label="아이디"
                value={username}
                onChange={handleUsernameChange}
              />
              <InputText
                label="이름"
                value={name}
                onChange={handleNameChange}
              />
              <InputText
                label="비밀번호"
                value={password}
                onChange={handlePasswordChange}
                type="password"
              />
              <InputText
                label="비밀번호 확인"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
                type="password"
              />
            </div>
            <SecondaryButton label="회원가입" onClick={handleSignUpClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
