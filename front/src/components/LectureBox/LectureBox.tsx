import React from "react";
import "./style.css";

export const LectureBox = (): JSX.Element => {
    return (
        <div className="lecture-box">
            <div className="frame">
                <p className="text-wrapper">[CS000] Convolutional Neural Networks for Visual Recognition</p>
                <img className="image" alt="Image" src="/img/image-1.png" />
                <div className="div">2024-01-14</div>
                <div className="text-wrapper-2">
                    설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
                </div>
            </div>
        </div>
    );
};
