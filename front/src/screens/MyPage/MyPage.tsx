import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { Header } from "../../components/Header";
import { HorizontalLectureBox } from "../../components/HorizontalLectureBox";
import { MyContentBox } from "../../components/MyContentBox";

export const MyPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (!userID) {
      navigate("/login"); // 'userID'가 없으면 로그인 페이지로 리디렉션
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <div className="my-page">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="logout-button-container">
          <button onClick={handleLogout} className="logout-button">
            로그아웃
          </button>
        </div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="frame-7">
              <HorizontalLectureBox
                selected={true}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />
              <HorizontalLectureBox
                selected={false}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />

              <HorizontalLectureBox
                selected={false}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />
              <HorizontalLectureBox
                selected={false}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />
              <HorizontalLectureBox
                selected={false}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />
            </div>
            <div className="text-wrapper-8">학습 중인 강의</div>
          </div>
          <div className="frame-8">
            <div className="text-wrapper-9">내 학습 자료</div>
            <div className="frame-9">
              <MyContentBox
                lectureTitle="Lecture 0"
                date="2024-01-14"
                resourceTitle="수업 필기"
              />
              <MyContentBox
                lectureTitle="Lecture 0"
                date="2024-01-14"
                resourceTitle="수업 필기"
              />
              <MyContentBox
                lectureTitle="Lecture 0"
                date="2024-01-14"
                resourceTitle="수업 필기"
              />
              <MyContentBox
                lectureTitle="Lecture 0"
                date="2024-01-14"
                resourceTitle="수업 필기"
              />
              <MyContentBox
                lectureTitle="Lecture 0"
                date="2024-01-14"
                resourceTitle="수업 필기"
              />
              <MyContentBox
                lectureTitle="Lecture 0"
                date="2024-01-14"
                resourceTitle="수업 필기"
              />
              <MyContentBox
                lectureTitle="Lecture 0"
                date="2024-01-14"
                resourceTitle="수업 필기"
              />
              <MyContentBox
                lectureTitle="Lecture 0"
                date="2024-01-14"
                resourceTitle="수업 필기"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
