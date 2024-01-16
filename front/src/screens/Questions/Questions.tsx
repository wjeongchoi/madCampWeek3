import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postRequest } from "../../axios"; // Ensure this import is correct based on your project structure

import "./style.css";
import { Header } from "../../components/Header";
import { QuestionBox } from "../../components/QuestionBox";
import { useNavigate } from "react-router-dom";

export const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { videoUrl } = useParams<{ videoUrl: string }>();

  useEffect(() => {
    // Fetch questions when the component mounts
    postRequest(
      `inference/makeqna/`,
      { vid: videoUrl }, // Sending videoUrl as 'vid' in the request body
      (response) => {
        // Assuming the response data contains an array of questions
        setQuestions(response.data.questions);
      },
      (error) => {
        console.error("Error fetching questions:", error);
        alert(error);
      }
    );
  }, [videoUrl]);

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
            {questions.map((question, index) => (
              <QuestionBox
                key={index}
                questionNumber={`${index + 1}`}
                questionText={question}
                onAnswerChange={handleAnswerChange}
              />
            ))}
          </div>
          <div className="secondary-button" onClick={handleViewModelAnswers}>
            <div className="text-wrapper-6">모범답안 확인</div>
          </div>
        </div>
      </div>
    </div>
  );
};
