import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
    selected: boolean;
    className: any;
}

export const LectureNameBox = ({ selected, className }: Props): JSX.Element => {
    return (
        <div className={`lecture-name-box selected-${selected} ${className}`}>
            <div className="frame">
                <div className="text-wrapper">Lecture 1</div>
                <div className="div">Introduction</div>
            </div>
        </div>
    );
};

LectureNameBox.propTypes = {
    selected: PropTypes.bool,
};
