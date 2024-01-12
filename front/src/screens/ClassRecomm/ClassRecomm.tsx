import React from "react";

import "./style.css";
import { Header } from "../../components/Header";
import { SecondaryButton } from "../../components/SecondaryButton";

export const ClassRecomm = (): JSX.Element => {
    return (
        <div className="class-recomm">
            <div className="div-2">
                <Header className="header-instance" divClassName="design-component-instance-node" />
                <div className="frame-2">
                    <p className="a-ipple">
                        <span className="span">
                            당신만을 위한
                            <br />
                        </span>
                        <span className="text-wrapper-6">AIpple</span>
                        <span className="span">의 강의 추천</span>
                    </p>
                    <SecondaryButton label="바로 시작하기"/>
                </div>
            </div>
        </div>
    );
};
