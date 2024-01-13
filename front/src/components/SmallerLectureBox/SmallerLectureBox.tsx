import React from "react";
import "./style.css";

export const SmallerLectureBox = (): JSX.Element => {
    return (
        <div className="smaller-lecture-box">
            <div className="group">
                <div className="text-wrapper">CS000</div>
                <div className="div">Introduction to ~~~~~~~~~~~</div>
            </div>
            <img className="image" alt="Image" src="image-1.png" />
        </div>
    );
};
