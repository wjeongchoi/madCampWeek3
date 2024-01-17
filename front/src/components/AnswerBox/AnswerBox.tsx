import React from "react";
import "./style.css";

interface AnswerBoxProps {
  questionNumber: string;
  questionText: string;
  modelAnswer: string;
  userAnswer: string;
}

export const AnswerBox = ({
  questionNumber,
  questionText,
  modelAnswer,
  userAnswer,
}: AnswerBoxProps): JSX.Element => {
    return (
        <div className="answer-box">
            <div className="frame">
                <div className="overlap-group">
                    <div className="text-wrapper">{questionText}</div>
                </div>
                <div className="div">Q{questionNumber}:</div>
            </div>
            <div className="frame-2">
                <div className="overlap">
                    <div className="text-wrapper-2">{userAnswer}</div>
                </div>
                <div className="div">A{questionNumber}:</div>
            </div>
            <div className="text-wrapper-3">{modelAnswer}</div>
        </div>
    );
};
