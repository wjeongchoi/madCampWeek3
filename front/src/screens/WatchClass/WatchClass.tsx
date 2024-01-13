import React from 'react';
import { ShowClass } from '../../components/ShowClass';

export const WatchClass: React.FC = () => {
  const videoId = "dQw4w9WgXcQ"; // 예시 유튜브 영상 ID

  return (
    <div>
      <h1>유튜브 영상 감상하기</h1>
      <ShowClass videoId={videoId} />
    </div>
  );
};

