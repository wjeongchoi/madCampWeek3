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
          divClassName="design-component-instance-node"
        />
        <div className="text-wrapper-4">어떤 분야에 관심이 있나요?</div>
        <div className="frame-2">
          <PrimaryButton />
          <PrimaryButton />
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};
