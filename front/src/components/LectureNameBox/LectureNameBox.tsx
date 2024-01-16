import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  selected: boolean;
  className?: string;
  lectureNumber: string;
  lectureTitle: string;
  onClick: () => void; // Add onClick prop
}

export const LectureNameBox = ({ selected, className, lectureNumber, lectureTitle, onClick }: Props): JSX.Element => {
  return (
    <div className={`lecture-name-box selected-${selected} ${className}`} onClick={onClick}> {/* Add onClick event */}
      <div className="frame">
        <div className="text-wrapper">{lectureNumber}</div>
        <div className="div">{lectureTitle}</div>
      </div>
    </div>
  );
};

LectureNameBox.propTypes = {
  selected: PropTypes.bool.isRequired,
  className: PropTypes.string,
  lectureNumber: PropTypes.string.isRequired,
  lectureTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Add PropTypes for onClick
};
