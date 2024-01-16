import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { Header } from "../../components/Header";
import { HorizontalLectureBox } from "../../components/HorizontalLectureBox";
import { MyContentBox } from "../../components/MyContentBox";

export const MyPage: React.FC = (): JSX.Element => {
  const [selectedLecture, setSelectedLecture] = useState<number | null>(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userID");
    navigate("/");
  };

  const selectLecture = (lectureId: number) => {
    setSelectedLecture(lectureId);
  };

  const lectures = [
    {
      id: 0,
      title:
        "Lecture Collection | Convolutional Neural Networks for Visual Recognition (Spring 2017)",
      desc: "Computer Vision has become ubiquitous in our society, with applications in search, image understanding, apps, mapping, medicine, drones, and self-driving cars. Core to many of these applications are visual recognition tasks such as image classification, localization and detection. Recent developments in neural network (aka “deep learning”) approaches have greatly advanced the performance of these state-of-the-art visual recognition systems. This lecture collection is a deep dive into details of the deep learning architectures with a focus on learning end-to-end models for these tasks, particularly image classification. From this lecture collection, students will learn to implement, train and debug their own neural networks and gain a detailed understanding of cutting-edge research in computer vision.",
      thumbnail_url: null,
      date: "2024-01-01",
    },
    {
      id: 1,
      title: "asdf",
      desc: "asdf",
      thumbnail_url: null,
      date: "2024-01-01",
    },
  ];

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
              {lectures.map((lecture) => (
                <HorizontalLectureBox
                  selected={selectedLecture === lecture.id} // Assuming each lecture has a unique 'id'
                  title={lecture.title}
                  date={lecture.date}
                  onClick={() => selectLecture(lecture.id)}
                />
              ))}
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
