import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { LectureBox } from "../../components/LectureBox";

export const ClassRecommResult = (): JSX.Element => {
    return (
        <div className="class-recomm-result">
            <div className="div-2">
                <Header
                    className="header-instance"
                    activePage="classRecomm"
                    divClassName="design-component-instance-node"
                />
                <div className="frame-2">
                    <div className="group">
                        <p className="a-ipple">
                            <span className="span">당신을 위한 </span>
                            <span className="text-wrapper-6">AIpple</span>
                            <span className="span">의 추천 강의</span>
                        </p>
                        <p className="p">
                            <span className="span">딥러닝</span>
                            <span className="text-wrapper-7">에 관심이 있는</span>
                        </p>
                    </div>
                    <div className="frame-3">
                        <LectureBox />
                        <LectureBox />
                        <LectureBox />

                    </div>
                </div>
            </div>
        </div>
    );
};
