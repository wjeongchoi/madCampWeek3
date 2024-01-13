import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
    selected: boolean;
    className: any;
}

export const HorizontalLectureBox = ({ selected, className }: Props): JSX.Element => {
    return (
        <div className={`horizontal-lecture selected-${selected} ${className}`}>
            <div className="text-wrapper">CS000</div>
            <div className="div">Introduction to ~~~~~~~~~~~</div>
        </div>
    );
};

HorizontalLectureBox.propTypes = {
    selected: PropTypes.bool,
};
