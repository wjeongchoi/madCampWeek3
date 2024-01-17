import React, { useState } from "react";
import { postRequest } from "../../axios"; // postRequest 함수는 axios를 이용해 구현되어야 합니다.
import "./style.css";
import { SecondaryButton } from "../SecondaryButton";

interface AddLectureDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddLectureDialog: React.FC<AddLectureDialogProps> = ({ isOpen, onClose }) => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [videoTitle, setVideoTitle] = useState<string>("");

  const handleAddLecture = () => {
    const body = {
      video_url: videoUrl,
      video_title: videoTitle
    };
    postRequest("lecture/add-youtube-video/", body, 
      () => {
        alert("강의가 성공적으로 추가되었습니다.");
        onClose(); 
      },
      (error: any) => {
        console.error("Error while adding lecture:", error);
        alert(error);
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="add-lecture-dialog">
      <input
        type="text"
        placeholder="비디오 URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="비디오 제목"
        value={videoTitle}
        onChange={(e) => setVideoTitle(e.target.value)}
      />
      <SecondaryButton label="강의 추가" onClick={handleAddLecture} />
      <SecondaryButton label="취소" onClick={onClose} />
    </div>
  );
};
