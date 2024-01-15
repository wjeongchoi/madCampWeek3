import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";
import { LectureNameBox } from "../../components/LectureNameBox/LectureNameBox";

export const ClassDetail = (): JSX.Element => {
  return (
    <div className="class-detail">
      <div className="div-2">
        <Header className="header-instance" activePage="classList" />{" "}
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-5">
              <p className="p">
                [CS000] Convolutional Neural Networks for Visual Recognition
              </p>
              <img className="image" alt="Image" src="img/image-1.png" />
              <div className="text-wrapper-6">2024-01-14</div>
              <div className="text-wrapper-7">
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </div>
            </div>
            <div className="frame-6">
              <LectureNameBox
                selected={true}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />{" "}
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />{" "}
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />{" "}
              <LectureNameBox
                selected={false}
                lectureNumber="Lecture 1"
                lectureTitle="Introduction"
              />{" "}
            </div>
          </div>
          <SecondaryButton label="지금 학습하기" />
        </div>
      </div>
    </div>
  );
};
