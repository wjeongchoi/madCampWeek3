import React from "react";
import "./style.css";

export const QuestionBox = (): JSX.Element => {
    return (
        <div className="question-box">
            <div className="frame">
                <div className="overlap-group">
                    <div className="text-wrapper">What is deep learning?</div>
                </div>
                <div className="div">Q1:</div>
            </div>
            <div className="frame-2">
                <div className="overlap">
                    <div className="text-wrapper-2">답을 입력하세요</div>
                </div>
                <div className="div">A1:</div>
            </div>
        </div>
    );
};
