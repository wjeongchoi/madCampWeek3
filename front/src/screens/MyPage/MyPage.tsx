import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { Header } from "../../components/Header";
import { HorizontalLectureBox } from "../../components/HorizontalLectureBox";
import { MyContentBox } from "../../components/MyContentBox";
import { getRequest } from "../../axios"; // Import getRequest

// Define an interface for lecture data
interface Lecture {
  id: number;
  title: string;
  desc: string;
  thumbnail_url: string | null;
  date: string;
}

export const MyPage: React.FC = (): JSX.Element => {
  const [selectedLecture, setSelectedLecture] = useState<number | null>(null);
  const [lectures, setLectures] = useState<Lecture[]>([]); // Use the Lecture interface for typing
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userID");
    if (userId) {
      getRequest(
        `lecture/user-lectures/${userId}/`,
        (data: Lecture[]) => {
          setLectures(data);
        },
        (error) => {
          console.error("Error fetching lectures:", error);
          alert(error);
        }
      );
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userID");
    navigate("/");
  };

  const selectLecture = (lectureId: number) => {
    setSelectedLecture(lectureId);
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
            <div className="text-wrapper-8">학습 중인 강의</div>
            <div className="frame-7">
              {lectures.map((lecture) => (
                <HorizontalLectureBox
                  key={lecture.id} // Add a key for each lecture
                  selected={selectedLecture === lecture.id}
                  title={lecture.title}
                  date={lecture.date}
                  onClick={() => selectLecture(lecture.id)}
                />
              ))}
            </div>
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
