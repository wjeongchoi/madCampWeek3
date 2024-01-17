import React, { useEffect, useState } from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";
import { LectureBox } from "../../components/LectureBox";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../axios";
import { AddLectureDialog } from "../../components/AddLectureDialog";

interface LectureData {
  id: number;
  title: string;
  date: string;
  desc: string;
  thumbnail_url: string;
}

export const ClassList: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [lectures, setLectures] = useState<LectureData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAddLectureDialogOpen, setIsAddLectureDialogOpen] =
    useState<boolean>(false);

  const navigateToClassDetail = (lectureId: number) => {
    navigate(`/classDetail/${lectureId}`); // Assuming you have a route like this
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery) {
      // If the search query is empty, reload the initial list
      loadInitialLectures();
      return;
    }
    getRequest(
      `lecture/search/?query=${encodeURIComponent(searchQuery)}`,
      (data: LectureData[]) => {
        setLectures(data);
      },
      (error: any) => {
        console.error("Error while fetching lectures:", error);
        alert(error); // Updated to display error message
      }
    );
  };
  
  const loadInitialLectures = () => {
    getRequest(
      "lecture/lecture_list/",
      (data: LectureData[]) => {
        setLectures(data);
      },
      (error: any) => {
        console.error("Error while fetching initial lectures:", error);
      }
    );
  };

  useEffect(() => {
    loadInitialLectures();
  }, []);

  const handleAddLectureClick = () => {
    const userID = localStorage.getItem("userID");
    if (!userID) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    } else {
      setIsAddLectureDialogOpen(true);
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
                <input
                  type="text"
                  placeholder="듣고 싶은 강의를 검색해보세요"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <SecondaryButton label="검색" onClick={handleSearch} />
            <SecondaryButton
              label="나만의 강의 추가하기"
              onClick={handleAddLectureClick}
            />
          </div>
          <AddLectureDialog
            isOpen={isAddLectureDialogOpen}
            onClose={() => setIsAddLectureDialogOpen(false)}
          />
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
