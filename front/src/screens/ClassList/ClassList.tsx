import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";
import { LectureBox } from "../../components/LectureBox";
import { useNavigate } from "react-router-dom";

export const ClassList = (): JSX.Element => {
  const navigate = useNavigate();

  const handleAddLectureClick = () => {
    const userID = localStorage.getItem('userID');
    if (!userID) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    } else {
      // 로그인한 경우, 강의 추가 로직 구현
      // 예: navigate('/add-lecture');
    }
  };

  return (
    <div className="class-list">
      <div className="div-2">
        <Header className="header-instance" activePage="classList" />
        <div className="frame-3">
          <div className="frame-4">
            <div className="input-text">
              <div className="text-wrapper-6">
                듣고 싶은 강의를 검색해보세요
              </div>
            </div>
            <SecondaryButton label="나만의 강의 추가하기" onClick={handleAddLectureClick} />
          </div>
          <div className="frame-5">
            <LectureBox
              title="[CS101] Introduction to Programming"
              description="Learn the basics of programming with Python..."
              imageUrl="/img/image-1.png"
              date="2024-02-01"
            />
            <LectureBox
              title="[CS101] Introduction to Programming"
              description="Learn the basics of programming with Python..."
              imageUrl="/img/image-1.png"
              date="2024-02-01"
            />
            <LectureBox
              title="[CS101] Introduction to Programming"
              description="Learn the basics of programming with Python..."
              imageUrl="/img/image-1.png"
              date="2024-02-01"
            />
            <LectureBox
              title="[CS101] Introduction to Programming"
              description="Learn the basics of programming with Python..."
              imageUrl="/img/image-1.png"
              date="2024-02-01"
            />
            <LectureBox
              title="[CS101] Introduction to Programming"
              description="Learn the basics of programming with Python..."
              imageUrl="/img/image-1.png"
              date="2024-02-01"
            />
            <LectureBox
              title="[CS101] Introduction to Programming"
              description="Learn the basics of programming with Python..."
              imageUrl="/img/image-1.png"
              date="2024-02-01"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
