import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";
import { LectureBox } from "../../components/LectureBox";

export const ClassList = (): JSX.Element => {
  return (
    <div className="class-list">
      <div className="div-2">
        <Header
          className="header-instance"
          activePage="classList" divClassName={undefined}        />
        <div className="frame-3">
          <div className="frame-4">
            <div className="input-text">
              <div className="overlap-group-2">
                <div className="text-wrapper-6">강의를 검색해보세요</div>
                <img className="search" alt="Search" src="search.svg" />
              </div>
            </div>
            <SecondaryButton
              label ="나만의 강의 추가하기"
            />
          </div>
          <div className="frame-5">
            <div className="frame-6">
              <LectureBox />
              <LectureBox />
              <LectureBox />
            </div>
            <div className="frame-6">
              <LectureBox />
              <LectureBox />
              <LectureBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
