import React from 'react';

// Props 타입 정의
interface ShowClassProps {
  videoId: string;
}

// 함수 컴포넌트와 Props 타입 적용
export const ShowClass: React.FC<ShowClassProps> = ({ videoId }) => {
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <h2>ShowClass: 유튜브 영상</h2>
      <iframe
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
