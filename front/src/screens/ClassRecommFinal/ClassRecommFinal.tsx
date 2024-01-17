import React from "react";
import "./style.css";
import { SecondaryButton } from "../../components/SecondaryButton";
import { Header } from "../../components/Header";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const ClassRecommFinal = ({userChoices}:{userChoices?: string[]}): JSX.Element => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleButtonClick = () => {
        navigate('/classRecommResult', { state: { userChoices } }); // Navigate to ClassRecommResult page
    };

    return (
        <div className="class-recomm-final">
            <div className="div-2">
                <Header
                    className="header-instance"
                    activePage="classRecomm"
                />
                <div className="frame-2">
                    <p className="a-ipple">
                        <span className="span">AIpple</span>
                        <span className="text-wrapper-4">이 강의 추천 중...</span>
                    </p>
                    <SecondaryButton 
                        label="결과 확인하기" 
                        onClick={handleButtonClick} // Add onClick event
                    />
                </div>
            </div>
        </div>
    );
};
