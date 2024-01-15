import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { QuestionBox } from "../../components/QuestionBox";

export const Questions = (): JSX.Element => {
  return (
    <div className="questions">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="frame-4">
          <div className="frame-5">
            <QuestionBox
              questionNumber="1"
              questionText="What is deep learning?"
            />
            <QuestionBox
              questionNumber="2"
              questionText="What is deep learning?"
            />
            <QuestionBox
              questionNumber="3"
              questionText="What is deep learning?"
            />
            <QuestionBox
              questionNumber="4"
              questionText="What is deep learning?"
            />
            <QuestionBox
              questionNumber="5"
              questionText="What is deep learning?"
            />
          </div>
          <div className="secondary-button">
            <div className="text-wrapper-6">모범답안 확인</div>
          </div>
        </div>
      </div>
    </div>
  );
};
