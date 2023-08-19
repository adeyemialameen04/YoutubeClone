import { useEffect } from "react";
import LazyImage from "../LazyImage";
import "./videoCard.css";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatTime, formatViews } from "../utils/format";

const VideoCard = ({ video }) => {
  useEffect(() => {
    console.log(video);
  }, [video]);

  return (
    <Link to={`/video/${video?.videoId}`} className="video__card">
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
        <LazyImage
          imgSrc={video?.author?.avatar[0]?.url}
          imgAlt={"Channel Image"}
        />
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
    </Link>
  );
};

export default VideoCard;
