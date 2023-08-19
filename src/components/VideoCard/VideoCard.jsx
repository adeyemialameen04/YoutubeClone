import { useEffect } from "react";
import LazyImage from "../LazyImage";
import "./videoCard.css";
import { MdVerified } from "react-icons/md";

const VideoCard = ({ video }) => {
  const truncateText = (text, maxWords) => {
    if (text.length >= maxWords) {
      return `${text.slice(0, maxWords)} ...`;
    }
  };

  const truncatedTitle = truncateText(video?.title, 30);

  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
    return views;
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    return formattedTime;
  };

  useEffect(() => {
    console.log(video);
  }, [video]);

  return (
    <article className="video__card">
      <div className="thumbnail-container">
        <div className="thumbnail-container">
          <LazyImage
            imgSrc={
              video?.thumbnails[1]?.url
                ? video?.thumbnails[1]?.url
                : video?.thumbnails[0]?.url
            }
            movingImgSrc={
              video?.movingThumbnails &&
              video?.movingThumbnails[0]?.url &&
              video?.movingThumbnails[0]?.url
            }
            imgAlt={"Video Thubnail"}
          />
          <div className="time">{formatTime(video?.lengthSeconds)}</div>
        </div>
      </div>
      <div className="video-details">
        <LazyImage imgSrc={video?.author?.avatar[0]?.url} />
        <div className="info">
          <h2>{video?.title}</h2>
          <div>
            <h3>
              {video?.author?.title}
              <span>
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <MdVerified />
                )}
              </span>
            </h3>
            <h5>
              <small>{formatViews(video?.stats?.views)} views</small>
              <span></span>
              <small>{video.publishedTimeText}</small>
            </h5>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
