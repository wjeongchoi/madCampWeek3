import PropTypes from "prop-types";
import React from "react";
import "./style.css";

// Update the interface to include lectureNumber and lectureTitle
interface Props {
    selected: boolean;
    className?: string;
    lectureNumber: string; // New prop for lecture number
    lectureTitle: string;   // New prop for lecture title
}

export const LectureNameBox = ({ selected, className, lectureNumber, lectureTitle }: Props): JSX.Element => {
    return (
        <div className={`lecture-name-box selected-${selected} ${className}`}>
            <div className="frame">
                <div className="text-wrapper">{lectureNumber}</div> 
                <div className="div">{lectureTitle}</div>
            </div>
        </div>
    );
};

// Update PropTypes to include the new props
LectureNameBox.propTypes = {
    selected: PropTypes.bool.isRequired,
    className: PropTypes.string,
    lectureNumber: PropTypes.string.isRequired, // PropType for lectureNumber
    lectureTitle: PropTypes.string.isRequired,   // PropType for lectureTitle
};
