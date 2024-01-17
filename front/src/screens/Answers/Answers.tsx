import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { AnswerBox } from "../../components/AnswerBox";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  userAnswers: Record<string, string>;
  questions: { Question: string; Answer: string }[];
}

export const Answers: React.FC = () => {
  const location = useLocation();
  const { userAnswers, questions } = (location.state as LocationState) || {};

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
            {questions &&
              questions.map((item, index) => (
                <AnswerBox
                  key={index}
                  questionNumber={`${index + 1}`}
                  questionText={item.Question}
                  modelAnswer={item.Answer}
                  userAnswer={userAnswers?.[`${index + 1}`] || ""}
                />
              ))}
          </div>
          <div className="secondary-button" onClick={handleFinishLearning}>
            <div className="text-wrapper-7">학습 종료</div>
          </div>
        </div>
      </div>
    </div>
  );
};
