import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { Header } from "../../components/Header";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import { getRequest, postRequest } from "../../axios";
import "./style.css";

interface VideoData {
  video_url: string;
  video_title: string;
}

export const WatchClass: React.FC = () => {
  const { lectureId, videoId } = useParams<{
    lectureId: string;
    videoId: string;
  }>();
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [videoTitle, setVideoTitle] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (lectureId && videoId) {
      getRequest(
        `lecture/${lectureId}/video/${videoId}/`,
        (data: VideoData) => {
          setVideoUrl(data.video_url);
          setVideoTitle(data.video_title); // Set the video title
        },
        (error: any) => {
          console.error("Error fetching video data:", error);
          alert(error);
        }
      );
    }
  }, [lectureId, videoId]);

  const handleEndStudyClick = () => {
    navigate(`/questions/${lectureId}/${videoId}`);
  };

  const handleGenerateSummary = async () => {
    setIsLoading(true); // Start loading
    const requestData = { vid: videoUrl }; // Use videoUrl for the request

    const handleSuccess = (response: any) => {
      const summary = response.data.summary; // Assuming the response contains a 'summary' field
      setNotes((prevNotes) => `${prevNotes}\n\n${summary}`); // Append summary to existing notes
      alert("요약본이 필기에 추가되었습니다");
    };

    const handleError = (error: any) => {
      console.error("Error generating summary:", error);
      alert(error);
    };

    await postRequest(
      "inference/make_summary/",
      requestData,
      handleSuccess,
      handleError
    );
    setIsLoading(false); // Stop loading
  };

  const handleSaveNotes = async () => {
    const userId = localStorage.getItem("userID");

    if (!title.trim()) {
      alert("제목을 입력해주세요");
      return;
    }

    if (!notes.trim()) {
      alert("내용을 입력해주세요");
      return;
    }

    const requestData = {
      video_id: videoId,
      title: title,
      memo: notes,
    };

    const handleSuccess = (response: any) => {
      alert("자료가 성공적으로 저장되었습니다.");
    };

    const handleError = (error: any) => {
      console.error("Error saving notes:", error);
      alert(error);
    };

    await postRequest(
      `lecture/save-notes/${userId}/${lectureId}/`,
      requestData,
      handleSuccess,
      handleError
    );
  };

  return (
    <div className="watch-class">
      <div className="div-2">
        {isLoading && <div className="loading-indicator">요약본 생성중...</div>}
        <Header className="header-instance" />
        <div className="row">
          <div className="video-column">
            <div className="video">
              <YouTube videoId={videoUrl} />
            </div>
            <div className="videoinfos">
              <div className="frame-2">
                <div className="text-wrapper-4">
                  Lecture {Number(videoId) + 1} {/* Display lecture number */}
                </div>
                <p className="p">{videoTitle}</p>
              </div>
              <div className="frame-3">
                <PrimaryButton
                  label="요약본 만들기"
                  onClick={handleGenerateSummary}
                />
                <PrimaryButton
                  label="필기 저장하기"
                  onClick={handleSaveNotes}
                />
                <SecondaryButton
                  label="학습 종료하기"
                  onClick={handleEndStudyClick}
                />
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
                placeholder="강의를 들으며 필기를 남겨보세요" // Placeholder for the notes
                rows={10} // Adjust the number of rows as needed
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
