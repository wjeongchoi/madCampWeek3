import React from "react";
import "./style.css";

interface HorizontalLectureBoxProps {
    selected: boolean;
    className?: string;
    title: string; // Prop for the lecture title
    date: string; // Prop for the lecture date
}

export const HorizontalLectureBox = ({ selected, className = "", title, date }: HorizontalLectureBoxProps): JSX.Element => {
    return (
        <div className={`horizontal-lecture selected-${selected} ${className}`}>
            <div className="frame">
                <div className="text-wrapper">{title}</div>
                <div className="div">{date}</div>
            </div>
        </div>
    );
};
