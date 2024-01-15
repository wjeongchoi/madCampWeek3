import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { AnswerBox } from "../../components/AnswerBox";

export const Answers = (): JSX.Element => {
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
              userAnswer="It's a type of machine learning..."
            />
            <AnswerBox
              questionNumber="1"
              questionText="What is deep learning?"
              modelAnswer="Deep learning is a subset of machine learning..."
              userAnswer="It's a type of machine learning..."
            />
            <AnswerBox
              questionNumber="1"
              questionText="What is deep learning?"
              modelAnswer="Deep learning is a subset of machine learning..."
              userAnswer="It's a type of machine learning..."
            />
            <AnswerBox
              questionNumber="1"
              questionText="What is deep learning?"
              modelAnswer="Deep learning is a subset of machine learning..."
              userAnswer="It's a type of machine learning..."
            />
            <AnswerBox
              questionNumber="1"
              questionText="What is deep learning?"
              modelAnswer="Deep learning is a subset of machine learning..."
              userAnswer="It's a type of machine learning..."
            />
          </div>
          <div className="secondary-button">
            <div className="text-wrapper-7">학습 종료</div>
          </div>
        </div>
      </div>
    </div>
  );
};
