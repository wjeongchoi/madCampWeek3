import React from "react";
import "./style.css";

interface MyContentBoxProps {
    lectureTitle: string; // Prop for the lecture title
    date: string;        // Prop for the date
    resourceTitle: string; // Prop for the resource title
    onClick: () => void; // Add this line
}

export const MyContentBox = ({ lectureTitle, date, resourceTitle, onClick }: MyContentBoxProps): JSX.Element => {
    return (
        <div className="my-content-box" onClick={onClick}>
            <div className="frame">
                <div className="div">
                    <div className="text-wrapper">{lectureTitle}</div>
                    <div className="text-wrapper-2">{date}</div>
                </div>
                <div className="text-wrapper-3">{resourceTitle}</div>
            </div>
        </div>
    );
};
