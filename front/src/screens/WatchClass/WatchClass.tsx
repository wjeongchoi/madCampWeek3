import React from "react";
import { ShowClass } from "../../components/ShowClass";
import "./style.css";
import { Header } from "../../components/Header";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";

export const WatchClass = (): JSX.Element => {
  const videoId = "vT1JzLTH4G4";

  return (
    <div className="watch-class">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="div-wrapper">
              <div className="text-wrapper-4">제목</div>
            </div>
            <div className="text-wrapper-5">
              필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기필기
            </div>
          </div>
        </div>
        <ShowClass videoId={videoId} />
        <div className="frame-3">
          <div className="text-wrapper-6">Lecture 0</div>
          <p className="p">
            Convolutional Neural Networks for Visual Recognition
          </p>
        </div>
        <div className="frame-4">
          <PrimaryButton label="요약본 만들기" />
          <PrimaryButton label="자료 저장하기" />
          <SecondaryButton label="학습 종료하기" />
        </div>
      </div>
    </div>
  );
};
