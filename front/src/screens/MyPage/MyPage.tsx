import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { HorizontalLectureBox } from "../../components/HorizontalLectureBox";
import { MyContentBox } from "../../components/MyContentBox";

export const MyPage = (): JSX.Element => {
  return (
    <div className="my-page">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="frame-5">
          <div className="frame-6">
            <div className="frame-7">
              <HorizontalLectureBox
                selected={true}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />
              <HorizontalLectureBox
                selected={false}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />

              <HorizontalLectureBox
                selected={false}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />
              <HorizontalLectureBox
                selected={false}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />
              <HorizontalLectureBox
                selected={false}
                title="[CS000] Introduction to Computer Science"
                date="2024-01-14"
              />
            </div>
            <div className="text-wrapper-8">학습 중인 강의</div>
          </div>
          <div className="frame-8">
            <div className="text-wrapper-9">내 학습 자료</div>
            <div className="frame-9">
              <MyContentBox />
              <MyContentBox />
              <MyContentBox />
              <MyContentBox />
              <MyContentBox />
              <MyContentBox />
              <MyContentBox />
              <MyContentBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
