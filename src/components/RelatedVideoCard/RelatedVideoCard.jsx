import React from "react";
import LazyImage from "../LazyImage";
import { truncateText } from "../utils/format";

const RelatedVideoCard = ({ video }) => {
  const truncatedTitle = truncateText(video?.title, 30);

  return (
    <article className="related-video-card">
      <LazyImage
        imgSrc={
          video?.thumbnails[1]?.url
            ? video?.thumbnails[1]?.url
            : video?.thumbnails[0]?.url
        }
        imgAlt={"Video thumbnail"}
      />
      <div className="related-video-card-info">
        <h2>{truncatedTitle}</h2>
        <div></div>
      </div>
    </article>
  );
};
export default RelatedVideoCard;
