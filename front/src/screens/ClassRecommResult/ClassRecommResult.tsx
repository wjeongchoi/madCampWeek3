import React, { useEffect, useState } from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { LectureBox } from "../../components/LectureBox";
import { useNavigate, useLocation } from "react-router-dom";
import { getRequest } from "../../axios";

export const ClassRecommResult = (): JSX.Element => {
  const location = useLocation();
  const userChoices = location.state?.userChoices as string[]; // Extract userChoices from state
  let interestArea = "";
  let recommendedLecture = "";

  if (userChoices[1] === "컴퓨터 비전(CV) 또는 이미지 처리") {
    interestArea = "컴퓨터 비전";
    recommendedLecture = "0";
  } else if (userChoices[1] === "자연어 처리(NLP) 또는 텍스트 분석") {
    interestArea = "자연어 처리";
    recommendedLecture = "1";
  } else if (userChoices[1] === "강화학습, 의사 결정, 게임 이론") {
    interestArea = "강화학습";
    recommendedLecture = "8";
  } else if (userChoices[1] === "그래프 신경망(GNN) 또는 네트워크 분석") {
    interestArea = "그래프 신경망";
    recommendedLecture = "7";
  } else if (userChoices[1] === "잘 모르겠음") {
    if (userChoices[0] === "인공지능 분야 전반") {
      interestArea = "인공지능";
      recommendedLecture = "6";
    } else if (userChoices[0] === "데이터 과학, 데이터 분석, 빅 데이터") {
      interestArea = "데이터 분석";
      recommendedLecture = "2";
    } else if (userChoices[0] === "확률론, 통계, 또는 수학적 모델링") {
      interestArea = "확률론";
      recommendedLecture = "4";
    }
  }

  const navigate = useNavigate();

  const navigateToClassDetail = (lectureId: number) => {
    navigate(`/classDetail/${lectureId}`); // Assuming you have a route like this
  };

  const [lectureDetails, setLectureDetails] = useState({
    title: "",
    description: "",
    imageUrl: "",
    date: "",
  });

  useEffect(() => {
    if (recommendedLecture) {
      getRequest(
        `lecture/${recommendedLecture}/`,
        (data) => {
          setLectureDetails({
            title: data.title,
            description: data.desc,
            imageUrl: data.thumbnail_url,
            date: data.date,
          });
        },
        (error) => {
          console.error("Error fetching lecture details:", error);
        }
      );
    }
  }, [recommendedLecture]);

  return (
    <div className="class-recomm-result">
      <div className="div-2">
        <Header className="header-instance" activePage="classRecomm" />
        <div className="frame-2">
          <div className="group">
            <p className="a-ipple">
              <span className="span">당신을 위한 </span>
              <span className="text-wrapper-6">AIpple</span>
              <span className="span">의 추천 강의</span>
            </p>
            <p className="p">
              <span className="span">{interestArea}</span>
              <span className="text-wrapper-7">에 관심이 있는</span>
            </p>
          </div>
          <div className="frame-3">
            <LectureBox
              title={lectureDetails.title}
              description={lectureDetails.description}
              imageUrl={lectureDetails.imageUrl}
              date={lectureDetails.date}
              onClick={() => navigateToClassDetail(Number(recommendedLecture))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
