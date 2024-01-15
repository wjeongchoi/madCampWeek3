import React from "react";
import "./style.css";
import { SecondaryButton } from "../../components/SecondaryButton";
import { Header } from "../../components/Header";

export const ClassRecommFinal = (): JSX.Element => {
    return (
        <div className="class-recomm-final">
            <div className="div-2">
                <Header
                    className="header-instance"
                    activePage="classRecomm"
                />
                <div className="frame-2">
                    <p className="a-ipple">
                        <span className="span">AIpple</span>
                        <span className="text-wrapper-4">이 강의 추천 중...</span>
                    </p>
                    <SecondaryButton label="결과 확인하기" />
                </div>
            </div>
        </div>
    );
};
