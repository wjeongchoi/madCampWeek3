import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { LectureBox } from "../../components/LectureBox";

export const ClassList = (): JSX.Element => {
  return (
    <div className="class-list">
      <div className="overlap-wrapper">
        <Header
          className="header-instance"
          divClassName="design-component-instance-node"
          activePage="classList"
        />
        <div className="overlap-2">
          <div className="frame-2">
            <LectureBox />
            <LectureBox />
            <LectureBox />
            <LectureBox />
          </div>
        </div>
      </div>
    </div>
  );
};
