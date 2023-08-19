import { useEffect } from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import useFetchVideoData from "../../components/utils/useFetchVideoData";
import "./home.css";

const Home = () => {
  const searchQuery = "javascript";
  const url = `search/?q=${searchQuery}`;
  const { data: videos } = useFetchVideoData(url, "videos");

  return (
    <main>
      <div className="container home__container">
        {videos &&
          videos.contents &&
          videos.contents.map(
            (video, index) =>
              video.type === "video" && (
                <VideoCard key={index} video={video.video} />
              )
          )}
      </div>
    </main>
  );
};

export default Home;
