import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { Header } from "../../components/Header";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";

export const WatchClass: React.FC = () => {
  const { videoUrl } = useParams<{ videoUrl: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(""); // Type specified as string
  const [notes, setNotes] = useState<string>(""); // Type specified as string

  // Event handler for the "End Study" button
  const handleEndStudyClick = () => {
    navigate(`/questions/${videoUrl}`);
  };

  return (
    <div className="watch-class">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="row">
          <div className="video-column">
            <div className="video">
              <YouTube
                videoId={videoUrl} // Use videoUrl here
                opts={{
                  width: "100%",
                }}
              />
            </div>
            <div className="videoinfos">
              <div className="frame-2">
                <div className="text-wrapper-4">Lecture 0</div>
                <p className="p">
                  Convolutional Neural Networks for Visual Recognition
                </p>
              </div>
              <div className="frame-3">
                <PrimaryButton label="요약본 만들기" />
                <PrimaryButton label="자료 저장하기" />
                <SecondaryButton
                  label="학습 종료하기"
                  onClick={handleEndStudyClick}
                />{" "}
                {/* Add onClick event to the button */}
              </div>
            </div>
          </div>
          <div className="textframe">
            <div className="frame-4">
              <div className="div-wrapper">
                <input
                  className="text-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력하세요" // Placeholder for the title
                />
              </div>
              <textarea
                className="notes-textarea"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="필기 내용을 여기에 작성하세요 (Markdown 형식 지원)" // Placeholder for the notes
                rows={10} // Adjust the number of rows as needed
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
