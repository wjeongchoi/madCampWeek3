import React, { useState } from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { QuestionBox } from "../../components/QuestionBox";
import { useNavigate } from "react-router-dom";

export const Questions: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleAnswerChange = (questionNumber: string, answer: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionNumber]: answer }));
  };

  const handleViewModelAnswers = () => {
    navigate("/answers", { state: { userAnswers: answers } });
  };
  return (
    <div className="questions">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="frame-4">
          <div className="frame-5">
            <QuestionBox
              questionNumber="1"
              questionText="What is deep learning?"
              onAnswerChange={handleAnswerChange}
            />
            <QuestionBox
              questionNumber="2"
              questionText="What is deep learning?"
              onAnswerChange={handleAnswerChange}
            />
            <QuestionBox
              questionNumber="3"
              questionText="What is deep learning?"
              onAnswerChange={handleAnswerChange}
            />
            <QuestionBox
              questionNumber="4"
              questionText="What is deep learning?"
              onAnswerChange={handleAnswerChange}
            />
            <QuestionBox
              questionNumber="5"
              questionText="What is deep learning?"
              onAnswerChange={handleAnswerChange}
            />
          </div>
          <div className="secondary-button" onClick={handleViewModelAnswers}>
            <div className="text-wrapper-6">모범답안 확인</div>
          </div>
        </div>
      </div>
    </div>
  );
};
