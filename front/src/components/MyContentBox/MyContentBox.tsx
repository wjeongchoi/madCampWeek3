import React from "react";
import "./style.css";

export const MyContentBox = (): JSX.Element => {
    return (
        <div className="my-content-box">
            <div className="frame">
                <div className="div">
                    <div className="text-wrapper">CS000</div>
                    <div className="text-wrapper-2">Lecture 0</div>
                </div>
                <div className="text-wrapper-3">수업 필기</div>
            </div>
        </div>
    );
};
