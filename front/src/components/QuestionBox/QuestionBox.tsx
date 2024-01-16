import React from "react";
import "./style.css";

interface QuestionBoxProps {
    questionNumber: string;
    questionText: string;
    onAnswerChange: (questionNumber: string, answer: string) => void;
  }
  

  export const QuestionBox: React.FC<QuestionBoxProps> = ({ questionNumber, questionText, onAnswerChange }) => {
    return (
    <div className="question-box">
      <div className="frame">
        <div className="overlap-group">
          <div className="text-wrapper">{questionText}</div>
        </div>
        <div className="div">Q{questionNumber}:</div>
      </div>
      <div className="frame-2">
        <input 
          type="text" 
          placeholder="답을 입력하세요" 
          className="input-answer" 
          onChange={(e) => onAnswerChange(questionNumber, e.target.value)}
        />
        <div className="div">A{questionNumber}:</div>
      </div>
    </div>
  );
};
