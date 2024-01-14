import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { PrimaryButton } from "../../components/PrimaryButton";

export const ClassRecommAsk = (): JSX.Element => {
  return (
    <div className="class-recomm-ask">
      <div className="div-2">
        <Header
          className="header-instance"
          activePage="classRecomm"
        />
        <div className="text-wrapper-4">어떤 분야에 관심이 있나요?</div>
        <div className="frame-2">
          <PrimaryButton label="선택지 1" />
          <PrimaryButton label="선택지 2" />
          <PrimaryButton label="선택지 3" />
        </div>
      </div>
    </div>
  );
};
