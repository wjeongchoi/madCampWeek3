import React from "react";
import "./style.css";

interface QuestionBoxProps {
  questionNumber: string;
  questionText: string;
}

export const QuestionBox = ({ questionNumber, questionText }: QuestionBoxProps): JSX.Element => {
    return (
        <div className="question-box">
            <div className="frame">
                <div className="overlap-group">
                    <div className="text-wrapper">{questionText}</div>
                </div>
                <div className="div">Q{questionNumber}:</div>
            </div>
            <div className="frame-2">
                <div className="overlap">
                    <div className="text-wrapper-2">답을 입력하세요</div>
                </div>
                <div className="div">A{questionNumber}:</div>
            </div>
        </div>
    );
};
