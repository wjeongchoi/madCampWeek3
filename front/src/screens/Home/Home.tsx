import React, { useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { SecondaryButton } from "../../components/SecondaryButton";
import { SmallLectureBox } from "../../components/SmallLectureBox";
import "./style.css";
import { useNavigate } from "react-router";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const frame5Ref = useRef<HTMLDivElement>(null);
  const [isScrollingRight, setIsScrollingRight] = useState(true); // 스크롤 방향 상태

  useEffect(() => {
    const timer = setInterval(() => {
    if (frame5Ref.current) {
      const maxScrollLeft = frame5Ref.current.scrollWidth - frame5Ref.current.clientWidth; // 40ms 마다 스크롤
      if (isScrollingRight) {
        if (frame5Ref.current.scrollLeft < maxScrollLeft) {
          frame5Ref.current.scrollLeft += 1;
        } else {
          setIsScrollingRight(false); // 오른쪽 끝에 도달했으므로 방향 전환
        }
      } else {
        if (frame5Ref.current.scrollLeft > 0) {
          frame5Ref.current.scrollLeft -= 1;
        } else {
          setIsScrollingRight(true); // 왼쪽 끝에 도달했으므로 방향 전환
        }
      }
    }
  }, 40); // 40ms 마다 스크롤 위치 업데이트
    return () => clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  const navigateToClassRecomm = () => {
    navigate("/classRecomm");
  };

  return (
    <div className="home">
      <div className="div-2">
        <div className="overlap-2">
          <Header className="header-instance" activePage="home" />
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="div-wrapper">
                <p className="p">당신의 A+을 위한 동영상 강의 AI 학습 도우미</p>
              </div>
              <Logo />
            </div>
          </div>
        </div>
        <div className="frame-4">
          <div className="group-2">
            <p className="a-ipple">
              <span className="span">AIpple</span>
              <span className="text-wrapper-8"> 인기 강의</span>
            </p>
          </div>
          <div className="frame-5" ref={frame5Ref}>
            <SmallLectureBox lectureId={"0"} />
            <SmallLectureBox lectureId={"1"} />
            <SmallLectureBox lectureId={"3"} />
            <SmallLectureBox lectureId={"5"} />
            <SmallLectureBox lectureId={"4"} />
      </div>
        </div>
        <div className="frame-3">
          <div className="a-ipple-wrapper">
            <p className="a-ipple">
              <span className="span">AIpple</span>
              <span className="text-wrapper-8">의 맞춤형 강의 추천 받기</span>
            </p>
          </div>
          <SecondaryButton
            label="바로 시작하기"
            onClick={navigateToClassRecomm}
          />
        </div>
      </div>
    </div>
  );
};
