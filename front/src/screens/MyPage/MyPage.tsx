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

// Define an interface for lecture notes data
interface LectureNote {
  vid: number;
  title: string;
  date: string;
  resourceTitle: string;
  memo: string;
}

export const MyPage: React.FC = (): JSX.Element => {
  const [selectedLecture, setSelectedLecture] = useState<number | null>(null);
  const [lectures, setLectures] = useState<Lecture[]>([]); // Use the Lecture interface for typing
  const [lectureNotes, setLectureNotes] = useState<LectureNote[]>([]);
  const [selectedNoteMemo, setSelectedNoteMemo] = useState<string>("");

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

  // Fetch lecture notes when a lecture is selected
  const selectLecture = (lectureId: number) => {
    setSelectedLecture(lectureId);
    const userId = localStorage.getItem("userID");
    if (userId) {
      getRequest(
        `lecture/notes/${userId}/${lectureId}/`,
        (data: LectureNote[]) => {
          setLectureNotes(data);
        },
        (error) => {
          console.error("Error fetching lecture notes:", error);
          alert(error);
        }
      );
    }
  };

  const handleContentBoxClick = (memo: string) => {
    setSelectedNoteMemo(memo);
  };

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
              {lectureNotes.map((note) => (
                <MyContentBox
                  key={note.vid}
                  lectureTitle={`Lecture ${Number(note.vid) + 1}`}
                  date={note.date}
                  resourceTitle={note.title}
                  onClick={() => handleContentBoxClick(note.memo)} // Assuming note includes a memo field
                />
              ))}
              {selectedNoteMemo && (
                <div className="selected-note-memo">
                  <p>{selectedNoteMemo}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
