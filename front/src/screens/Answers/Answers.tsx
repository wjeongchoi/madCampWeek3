import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { AnswerBox } from "../../components/AnswerBox";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  userAnswers: Record<string, string>;
}

export const Answers: React.FC = () => {
  const location = useLocation();
  const { userAnswers } = (location.state as LocationState) || {};

  const navigate = useNavigate(); // Create navigate function

  const handleFinishLearning = () => {
    navigate("/myPage"); // Navigate to the MyPage
  };
  return (
    <div className="answers">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="frame-4">
          <div className="frame-5">
            <AnswerBox
              questionNumber="1"
              questionText="What is deep learning?"
              modelAnswer="Deep learning is a subset of machine learning..."
              userAnswer={userAnswers?.["1"] || ""}
            />
            <AnswerBox
              questionNumber="2"
              questionText="What is deep learning?"
              modelAnswer="Deep learning is a subset of machine learning..."
              userAnswer={userAnswers?.["2"] || ""}
            />
            <AnswerBox
              questionNumber="3"
              questionText="What is deep learning?"
              modelAnswer="Deep learning is a subset of machine learning..."
              userAnswer={userAnswers?.["3"] || ""}
            />
            <AnswerBox
              questionNumber="4"
              questionText="What is deep learning?"
              modelAnswer="Deep learning is a subset of machine learning..."
              userAnswer={userAnswers?.["4"] || ""}
            />
            <AnswerBox
              questionNumber="5"
              questionText="What is deep learning?"
              modelAnswer="Deep learning is a subset of machine learning..."
              userAnswer={userAnswers?.["5"] || ""}
            />
          </div>
          <div className="secondary-button" onClick={handleFinishLearning}>
            <div className="text-wrapper-7">학습 종료</div>
          </div>
        </div>
      </div>
    </div>
  );
};
