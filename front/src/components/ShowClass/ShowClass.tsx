import React from "react";

interface ShowClassProps {
  videoId: string;
}

export const ShowClass: React.FC<ShowClassProps> = ({ videoId }) => {
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="show-class-container">
      <iframe
        src={url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Class Video" // It's a good practice to provide a title
      ></iframe>
    </div>
  );
};
