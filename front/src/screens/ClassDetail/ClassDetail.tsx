import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";
import { LectureNameBox } from "../../components/LectureNameBox/LectureNameBox";

export const ClassDetail = (): JSX.Element => {
  const navigate = useNavigate();

  const handleStudyNowClick = () => {
    const userID = localStorage.getItem('userID');
    if (userID) {
      // 사용자가 로그인한 경우의 로직 (예: 학습 페이지로 이동)
      // navigate('/learning-page'); // 예시
    } else {
      // 로그인하지 않은 경우 로그인 페이지로 
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  };
  return (
    <div className="class-detail">
      <div className="div-2">
        <Header className="header-instance" activePage="classList" />{" "}
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-5">
              <p className="p">
                [CS000] Convolutional Neural Networks for Visual Recognition
              </p>
              <img className="image" alt="Image" src="img/image-1.png" />
              <div className="text-wrapper-6">2024-01-14</div>
              <div className="text-wrapper-7">
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </div>
            </div>
            <div className="frame-6">
              <LectureNameBox
                selected={true}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />{" "}
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />{" "}
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />{" "}
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />{" "}
            </div>
          </div>
          <SecondaryButton label="지금 학습하기" onClick={handleStudyNowClick} />
        </div>
      </div>
    </div>
  );
};
