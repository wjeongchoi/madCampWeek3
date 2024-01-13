import React from "react";
import "./style.css";
import { SecondaryButton } from "../../components/SecondaryButton";
import { Header } from "../../components/Header";

export const ClassRecommFinal = (): JSX.Element => {
  return (
    <div className="class-recomm-final">
      <div className="div-2">
        <Header
          className="header-instance"
          activePage="classRecomm"
          divClassName="design-component-instance-node"
        />
        <div className="frame-2">
          <div className="text-wrapper-4">~~~~~문구 들어가야 함</div>
          <SecondaryButton label="결과 확인하기" />
        </div>
      </div>
    </div>
  );
};
