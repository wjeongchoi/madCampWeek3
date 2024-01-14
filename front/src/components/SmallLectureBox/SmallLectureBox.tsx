import React from "react";
import "./style.css";

export const SmallLectureBox = (): JSX.Element => {
    return (
        <div className="small-lecture-box">
            <p className="text-wrapper">[CS000] Convolutional Neural Networks for Visual Recognition</p>
            <img className="image" alt="Image" src="img/image-1.png" />
        </div>
    );
};
