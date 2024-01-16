import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import YouTube from "react-youtube";
import { useNavigate, useParams } from "react-router-dom";

export const WatchClass = (): JSX.Element => {
  const { videoUrl } = useParams<{ videoUrl: string }>();
  const navigate = useNavigate(); // Create navigate function

  // Event handler for the "End Study" button
  const handleEndStudyClick = () => {
    navigate(`/questions/${videoUrl}`); // Navigate to /questions/{videoUrl}
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
                <SecondaryButton label="학습 종료하기" onClick={handleEndStudyClick} /> {/* Add onClick event to the button */}
              </div>
            </div>
          </div>
          <div className="textframe">
            <div className="frame-4">
              <div className="div-wrapper">
                <div className="text-wrapper-5">제목</div>
              </div>
              <div className="text-wrapper-6">
                필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
