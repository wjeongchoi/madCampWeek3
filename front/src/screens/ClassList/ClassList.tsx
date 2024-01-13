import React from "react";
import { Header } from "../../components/Header";
import { LectureBox } from "../../components/LectureBox";
import { SideBar } from "../../components/SideBar";
import "./style.css";

export const ClassList = (): JSX.Element => {
  return (
    <div className="class-list">
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="overlap-3">
            <SideBar
              className="side-bar-instance"
              sidebarButtonDivClassName="design-component-instance-node"
              sidebarButtonPropertyClassName="design-component-instance-node"
              sidebarButtonPropertyClassNameOverride="design-component-instance-node"
              sidebarButtonPropertyDefaultClassName="design-component-instance-node"
              sidebarButtonPropertyDefaultClassNameOverride="design-component-instance-node"
              sidebarButtonPropertyVariantClassName="design-component-instance-node"
              sidebarButtonPropertyVariantClassNameOverride="design-component-instance-node"
            />
            <Header
              className="header-instance"
              divClassName="design-component-instance-node"
              activePage="classList"
            />
          </div>
          <div className="frame-3">
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
