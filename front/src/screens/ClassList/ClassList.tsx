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
            <Header className="header-instance" />
          </div>
          <div className="frame-3">
            <LectureBox />
            <LectureBox />
            <LectureBox />
            <LectureBox />
            <div className="lecture-box-2">
              <div className="overlap-4">
                <div className="text-wrapper-8">CS000</div>
                <div className="text-wrapper-9">Introduce to ~~~~~</div>
              </div>
              <img className="img" alt="Image" src="/img/image-1-1.png" />
              <div className="text-wrapper-10">
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </div>
            </div>
            <div className="lecture-box-2">
              <div className="overlap-4">
                <div className="text-wrapper-8">CS000</div>
                <div className="text-wrapper-9">Introduce to ~~~~~</div>
              </div>
              <img className="image-2" alt="Image" src="/img/image-1-1.png" />
              <div className="text-wrapper-10">
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
