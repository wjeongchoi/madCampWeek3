import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { LectureBox } from "../../components/LectureBox";
import { useNavigate, useLocation } from "react-router-dom";

export const ClassRecommResult = (): JSX.Element => {
  const location = useLocation();
  const userChoices = location.state?.userChoices as string[]; // Extract userChoices from state
  let interestArea = "";
  let recommendedLecture = "";

  
  if (userChoices[1] === "컴퓨터 비전(CV) 또는 이미지 처리") {
    interestArea = "컴퓨터 비전"
    recommendedLecture = "Convolutional Neural Networks for Visual Recognition (Spring 2017)"
  } else if (userChoices[1] === "자연어 처리(NLP) 또는 텍스트 분석") {
    interestArea = "자연어 처리"
    recommendedLecture = "Natural Language Processing with Deep Learning (Winter 2017)"
  } else if (userChoices[1] === "강화학습, 의사 결정, 게임 이론") {
    interestArea = "강화학습"
    recommendedLecture = "Stanford CS234: Reinforcement Learning | Winter 2019"
  } else if (userChoices[1] === "그래프 신경망(GNN) 또는 네트워크 분석") {
    interestArea = "그래프 신경망"
    recommendedLecture = "Stanford CS224W: Machine Learning with Graphs"
  } else if (userChoices[1] === "잘 모르겠음") {
    if (userChoices[0] === "인공지능 분야 전반") {
      interestArea = "인공지능";
      recommendedLecture = "Stanford CS229M: Machine Learning Theory - Fall 2021"
    } else if (userChoices[0] === "데이터 과학, 데이터 분석, 빅 데이터") {
      interestArea = "데이터 분석"
      recommendedLecture = "CS472: Data science and AI for COVID-19"
    } else if (userChoices[0] === "확률론, 통계, 또는 수학적 모델링") {
      interestArea = "확률론"
      recommendedLecture = "Stanford CS109 Introduction to Probability for Computer Scientists I 2022 I Chris Piech"
    } 
  } 

  const navigate = useNavigate();

  const navigateToClassDetail = (lectureId: number) => {
    navigate(`/classDetail/${lectureId}`); // Assuming you have a route like this
  };


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
              title="[CS101] Introduction to Programming"
              description="Learn the basics of programming with Python..."
              imageUrl="/img/image-1.png"
              date="2024-02-01"
              onClick={() => navigateToClassDetail(0)}
              />
            <LectureBox
              title="[CS101] Introduction to Programming"
              description="Learn the basics of programming with Python..."
              imageUrl="/img/image-1.png"
              date="2024-02-01"
              onClick={() => navigateToClassDetail(0)}

            />
            <LectureBox
              title="[CS101] Introduction to Programming"
              description="Learn the basics of programming with Python..."
              imageUrl="/img/image-1.png"
              date="2024-02-01"
              onClick={() => navigateToClassDetail(0)}

            />
          </div>
        </div>
      </div>
    </div>
  );
};
