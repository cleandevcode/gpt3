import { Loading } from "components/shared";
import { useQuery } from "graphql-hooks";
import VideoCard from "views/ui-components/data-display/Cards/VideoCard";

const VIDEOS_QUERY = `
query getVideoGuides {
  allVideoguides {
    id
    summary
    title
    video {
      url
      thumbnailUrl
    }
    duration
  }
}

`;

const VideoGuides = () => {
  const { loading, data } = useQuery(VIDEOS_QUERY);

  return (
    <div className="flex flex-col gap-4 h-full">
      <h3 className="mb-5">Video Guides</h3>
      <Loading loading={loading}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {!loading &&
            data?.allVideoguides &&
            data?.allVideoguides?.length > 0 &&
            data?.allVideoguides.map((video) => (
              <VideoCard key={video.id} item={video} />
            ))}
        </div>
      </Loading>
    </div>
  );
};

export default VideoGuides;
