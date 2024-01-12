import React from "react";
import "./style.css";
import { Header } from "../../components/Header";

export const MyPage = (): JSX.Element => {
    return (
        <div className="my-page">
            <div className="div-2">
                <Header className="header-instance" divClassName={undefined} />
                <div className="text-wrapper-3">내 학습 자료</div>
                <div className="text-wrapper-4">문제 다시 풀기</div>
                <div className="text-wrapper-5">학습 중인 강의</div>
            </div>
        </div>
    );
};
