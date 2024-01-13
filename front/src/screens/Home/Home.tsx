import React from "react";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { SecondaryButton } from "../../components/SecondaryButton";
import { SmallLectureBox } from "../../components/SmallLectureBox";
import "./style.css";
import { useNavigate } from "react-router";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateToClassRecomm = () => {
    navigate("/classRecomm");
  };

  return (
    <div className="home">
      <div className="div-2">
        <div className="overlap-2">
          <Header
            className="header-instance"
            divClassName="design-component-instance-node"
            activePage="home"
          />
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="div-wrapper">
                <p className="p">당신의 A+을 위한 동영상 강의 AI 학습 도우미</p>
              </div>
              <Logo />
            </div>
          </div>
        </div>

        <div className="frame-4">
          <div className="group-2">
            <p className="a-ipple">
              <span className="span">AIpple</span>
              <span className="text-wrapper-8"> 인기 강의</span>
            </p>
          </div>
          <div className="frame-5">
            <SmallLectureBox />
            <SmallLectureBox />
            <SmallLectureBox />
            <SmallLectureBox />
            <SmallLectureBox />
            <SmallLectureBox />
          </div>
        </div>
        <div className="frame-3">
          <div className="a-ipple-wrapper">
            <p className="a-ipple">
              <span className="span">AIpple</span>
              <span className="text-wrapper-8">의 맞춤형 강의 추천 받기</span>
            </p>
          </div>
          <SecondaryButton
            label="바로 시작하기"
            onClick={navigateToClassRecomm}
          />
        </div>
      </div>
    </div>
  );
};
