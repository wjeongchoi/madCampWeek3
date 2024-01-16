import React from "react";
import "./style.css";

// Define an interface for the component props
interface LectureBoxProps {
  title: string; // Prop for the lecture title
  description: string; // Prop for the lecture description
  imageUrl: string; // Prop for the lecture image URL
  date: string; // Prop for the lecture date
  onClick: () => void; // Add this line
}

// Update the component to accept props
export const LectureBox = ({
  title,
  description,
  imageUrl,
  date,
  onClick,
}: LectureBoxProps): JSX.Element => {
  return (
    <div className="lecture-box" onClick={onClick}>
      <div className="frame">
        <p className="text-wrapper">{title}</p>
        <img className="image" alt="Lecture" src="/img/image-1.png" />
        <div className="div">{date}</div> 
        <div className="text-wrapper-2">{description}</div>{" "}
      </div>
    </div>
  );
};
