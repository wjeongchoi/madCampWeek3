import React, { useEffect, useState } from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";
import { LectureBox } from "../../components/LectureBox";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../axios";

interface LectureData {
  id: number;
  thumbnail_url: string;
  date: string;
  title: string;
  desc: string;
}

export const ClassList: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [lectures, setLectures] = useState<LectureData[]>([]);

  const navigateToClassDetail = (lectureId: number) => {
    navigate(`/classDetail/${lectureId}`); // Assuming you have a route like this
  };

  useEffect(() => {
    getRequest(
      "lecture/lecture_list/",
      (data: LectureData[]) => {
        setLectures(data);
      },
      (error: any) => {
        console.error("Error while fetching lectures:", error);
      }
    );
  }, []);

  const handleAddLectureClick = () => {
    const userID = localStorage.getItem("userID");
    if (!userID) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    } else {
      // 로그인한 경우, 강의 추가 로직 구현
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
            <SecondaryButton
              label="나만의 강의 추가하기"
              onClick={handleAddLectureClick}
            />
          </div>
          <div className="frame-5">
            {lectures.map((lecture) => (
              <LectureBox
                key={lecture.id}
                title={lecture.title}
                description={lecture.desc}
                imageUrl={lecture.thumbnail_url}
                date={lecture.date}
                onClick={() => navigateToClassDetail(lecture.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
