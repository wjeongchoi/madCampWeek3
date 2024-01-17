import React from "react";
import "./style.css";

interface HorizontalLectureBoxProps {
    selected: boolean;
    title: string;
    date: string;
    onClick: () => void;
  }
  
  export const HorizontalLectureBox: React.FC<HorizontalLectureBoxProps> = ({ selected, title, date, onClick }) => {
    return (
      <div className={`horizontal-lecture-box ${selected ? 'selected' : 'not-selected'}`} onClick={onClick}>
            <div className="frame">
                <div className="text-wrapper">{title}</div>
                <div className="div">{date}</div>
            </div>
        </div>
    );
};
