import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";
import { LectureNameBox } from "../../components/LectureNameBox/LectureNameBox";
import "./style.css";
import { getRequest } from "../../axios";

interface LectureDetail {
  id: number;
  title: string;
  date: string;
  desc: string;
}

interface VideoDetail {
  video_id: number;
  video_url: string;
  video_title: string;
}

export const ClassDetail = (): JSX.Element => {
  const navigate = useNavigate();
  const { lectureId } = useParams<{ lectureId: string }>();
  const [lecture, setLecture] = useState<LectureDetail | null>(null);
  const [videos, setVideos] = useState<VideoDetail[]>([]);

  useEffect(() => {
    getRequest(
      `lecture/${lectureId}/`,
      (data: LectureDetail) => setLecture(data),
      (error: any) => console.error('Error fetching lecture details:', error)
    );

    getRequest(
      `lecture/${lectureId}/videos/`,
      (data: VideoDetail[]) => setVideos(data),
      (error: any) => console.error('Error fetching video details:', error)
    );
  }, [lectureId]);

  const handleStudyNowClick = () => {
    const userID = localStorage.getItem('userID');
    if (userID) {
      // navigate to study page
    } else {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  };

  if (!lecture) {
    return <div>Loading...</div>;
  }

  return (
    <div className="class-detail">
      <div className="div-2">
        <Header className="header-instance" activePage="classList" />
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-5">
              <p className="p">{lecture.title}</p>
              <img className="image" alt="Lecture" src="/img/image-1.png" />
              <div className="text-wrapper-6">{lecture.date}</div>
              <div className="text-wrapper-7">{lecture.desc}</div>
            </div>
            <div className="frame-6">
              {videos.map((video) => (
                <LectureNameBox
                  key={video.video_id}
                  selected={false}
                  lectureNumber={`Video ${video.video_id}`}
                  lectureTitle={video.video_title}
                />
              ))}
            </div>
          </div>
          <SecondaryButton label="지금 학습하기" onClick={handleStudyNowClick} />
        </div>
      </div>
    </div>
  );
};
