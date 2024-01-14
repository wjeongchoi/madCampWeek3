import React from "react";
import "./style.css";

interface SmallLectureBoxProps {
    text: string; // Prop for the text content
    imageUrl: string; // Prop for the image URL
}

export const SmallLectureBox = ({ text, imageUrl }: SmallLectureBoxProps): JSX.Element => {
    return (
        <div className="small-lecture-box">
            <p className="small-text-wrapper">{text}</p>
            <img className="image" alt="Lecture" src={imageUrl} />
        </div>
    );
};
