import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../axios";
import "./style.css";

interface SmallLectureBoxProps {
    lectureId: string;
}

export const SmallLectureBox = ({ lectureId }: SmallLectureBoxProps): JSX.Element => {
    const [title, setTitle] = useState<string>("");
    const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        getRequest(
            `lecture/${lectureId}/`,
            (data) => {
                setTitle(data.title);
                setThumbnailUrl(data.thumbnail_url);
            },
            (error) => {
                console.error("Error fetching lecture details:", error);
            }
        );
    }, [lectureId]);

    const handleClick = () => {
        navigate(`/classDetail/${lectureId}`);
    };

    return (
        <div className="small-lecture-box" onClick={handleClick}>
            <p className="small-text-wrapper">{title}</p>
            <img className="image" alt={title} src={thumbnailUrl} />
        </div>
    );
};
