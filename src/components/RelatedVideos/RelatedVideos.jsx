import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard";
import "./relatedVideos.css";

const RelatedVideos = ({ relatedVideos }) => {
  return (
    <aside className="related-videos">
      {relatedVideos &&
        relatedVideos.contents &&
        relatedVideos.contents.map(
          (video, index) =>
            video.type === "video" && (
              <RelatedVideoCard key={index} video={video.video} />
            )
        )}
    </aside>
  );
};

export default RelatedVideos;
