import VideoCard from "../../components/VideoCard/VideoCard";
import useFetchVideoData from "../../customHooks/useFetchVideoData";
import "./home.css";

const Home = () => {
  const searchQuery = "javascript";
  const url = `search/?q=${searchQuery}&maxResults=10`;
  const data = useFetchVideoData(url);

  return (
    <main>
      <div className="container home__container">
        {data &&
          data.contents &&
          data.contents.map(
            (data, index) =>
              // <SearchedVideoCard  />
              data.type === "video" && (
                <VideoCard key={index} video={data.video} />
              )
          )}
      </div>
    </main>
  );
};

export default Home;
