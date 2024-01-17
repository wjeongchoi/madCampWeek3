import React, { useState } from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { AnswerButton } from "../../components/AnswerButton";
import { ClassRecommFinal } from "../ClassRecommFinal"; // 명명된 내보내기 방식으로 임포트

type QuestionChoices = {
  q1: string[];
  q2: string[];
  q3: string[];
};

export const ClassRecommAsk = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userChoices, setUserChoices] = useState<string[]>([]);

  // 각 질문에 대한 선택지 배열
  const choices: QuestionChoices = {
    q1: ["데이터 과학, 데이터 분석, 빅 데이터", "확률론, 통계, 또는 수학적 모델링", "인공지능 분야 전반"] ,
    q2: ["컴퓨터 비전(CV) 또는 이미지 처리", "자연어 처리(NLP) 또는 텍스트 분석", "강화학습, 의사 결정, 게임 이론", "그래프 신경망(GNN) 또는 네트워크 분석", "잘 모르겠음"] ,
    q3: ["기본적인 개념 및 원리에 대한 이해", "고급 주제 및 복잡한 이론에 대한 심층적인 학습", "이론적 배경보다는 실용적 응용"] ,
  };

  const handleButtonClick = (choice: string) => {
    setUserChoices([...userChoices, choice]);

    if (currentQuestion <= 3) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getQuestionText = () => {
    switch (currentQuestion) {
      case 1:
        return "어떤 분야에 관심이 있나요?";
      case 2:
        return "전문성을 가지고 싶은 분야가 있나요?";
      case 3:
        return "배우고 싶은 강의의 적절한 난이도는 어느 정도인가요?";
      default:
        return "질문이 더 이상 없습니다.";
    }
  };

  // 현재 질문에 따른 선택지 렌더링
  const renderChoices = () => {
    // currentQuestion을 문자열 키로 변환
    const questionKey = `q${currentQuestion}` as keyof QuestionChoices;
    const currentChoices = choices[questionKey];
  
    return currentChoices.map((label, index) => (
      <AnswerButton key={index} label={label} onClick={() => handleButtonClick(label)} />
    ));
  };

  if (currentQuestion > 3) {
    return <ClassRecommFinal userChoices={userChoices}/>;
  }

  return (
    <div className="class-recomm-ask">
      <div className="div-2">
        <Header
          className="header-instance"
          activePage="classRecomm"
        />
        <div className="text-wrapper-4">{getQuestionText()}</div>
        <div className="frame-2">
          {renderChoices()}
        </div>
      </div>
    </div>
  );
};
