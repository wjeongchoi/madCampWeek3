import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRequest, postRequest } from "../../axios";

import "./style.css";
import { Header } from "../../components/Header";
import { QuestionBox } from "../../components/QuestionBox";

export const Questions: React.FC = () => {
  // Updated the state to hold an array of objects with Question and Answer
  const [questions, setQuestions] = useState<{ Question: string, Answer: string }[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { lectureId, videoId } = useParams<{ lectureId: string; videoId: string; }>();

  useEffect(() => {
    getRequest(
      `lecture/${lectureId}/video/${videoId}/`,
      (response) => {
        const videoUrl: string = response.video_url;
        postRequest(
          "inference/make_qna/",
          { vid : videoUrl },
          (response) => {
            // Set questions with the array of question-answer pairs
            setQuestions(response.data.message);
          },
          (error) => {
            console.error("Error fetching questions:", error);
            alert(error);
          }
        );
      },
      (error) => {
        console.error("Error fetching video URL:", error);
        alert(error);
      }
    );
  }, [lectureId, videoId]);

  const handleAnswerChange = (questionNumber: string, answer: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionNumber]: answer }));
  };

  const handleViewModelAnswers = () => {
    navigate(`/answers/${lectureId}/${videoId}`, {
      state: { userAnswers: answers, questions: questions },
    });
  };  

  return (
    <div className="questions">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="frame-4">
          <div className="frame-5">
            {questions.map((item, index) => (
              <QuestionBox
                key={index}
                questionNumber={`${index + 1}`}
                questionText={item.Question}
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
