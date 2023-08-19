import "./videoDetails.css";
import { useEffect } from "react";
import useFetchVideoData from "../../components/utils/useFetchVideoData";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import LazyImage from "../../components/LazyImage";
import { MdVerified } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { formatLikes, formatViews } from "../../components/utils/format";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import axios from "axios";

const VideoDetails = () => {
  const { videoId } = useParams();
  const url = `video/details/?id=${videoId}`;
  const relatedVideosURL = `video/related-contents/?id=${videoId}`;
  const { data: videoData } = useFetchVideoData(url, "VideoData");
  const { data: relatedData } = useFetchVideoData(
    relatedVideosURL,
    "Related videos"
  );
  const videoURL = `https://www.youtube.com/watch?v=${
    videoData && videoData.videoId
  }`;

  useEffect(() => {
    if (relatedData) {
      console.log("Related", relatedData);
    }
  }, [relatedData]);

  return (
    <main className="video__details-main">
      <div className="container video-details-container">
        <section className="video-detail">
          <div className="video-container">
            <ReactPlayer url={videoURL} width="100%" controls playing={true} />
          </div>
          <h2 className="title">{videoData?.title}</h2>
          <div className="interactions">
            <div className="channel-container">
              <LazyImage
                imgSrc={videoData?.author?.avatar[0]?.url}
                imgAlt={"Channel Image"}
              />
              <div>
                <h3>
                  {videoData?.author?.title}
                  <span>
                    {videoData?.author?.badges[0]?.type ===
                      "VERIFIED_CHANNEL" && (
                      <MdVerified style={{ color: "rgb(32, 213, 236)" }} />
                    )}
                  </span>
                </h3>
                <small>{videoData?.author?.stats?.subscribersText}</small>
              </div>
            </div>
            <div className="stats">
              <span>
                <AiOutlineLike style={{ fontSize: "1.2rem" }} />
                {formatLikes(videoData?.stats?.likes)} Likes
              </span>
              <span>{formatViews(videoData?.stats?.views)} Views</span>
            </div>
          </div>
        </section>
        <RelatedVideos relatedVideos={relatedData} />
      </div>
    </main>
  );
};

export default VideoDetails;
