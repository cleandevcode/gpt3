import { Loading } from "components/shared";
import { useQuery } from "graphql-hooks";
import { useEffect, useMemo } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import VideoCard from "views/ui-components/data-display/Cards/VideoCard";

const VIDEOS_QUERY = `
query MyQuery($filter: VideoModelFilter) {
  allVideos(filter: $filter) {
    title
    video {
      url
      thumbnailUrl
    }
    summary
  }
}

`;

const VideoGuides = () => {
  const location = useLocation();
  const isHowToVideos = useMemo(() => {
    return location.pathname.includes(`how-to-videos`);
  }, [location]);

  const title = isHowToVideos ? `How To Videos` : `Educational Videos`;
  const { loading, data } = useQuery(VIDEOS_QUERY, {
    variables: {
      filter: {
        ishowto: {
          eq: isHowToVideos,
        },
      },
    },
  });

  return (
    <div className="flex flex-col gap-4 h-full">
      <h3 className="mb-5">{title}</h3>
      <Loading loading={loading}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {!loading &&
            data?.allVideos &&
            data?.allVideos?.length > 0 &&
            data?.allVideos.map((video) => (
              <VideoCard key={video.id} item={video} />
            ))}
        </div>
      </Loading>
    </div>
  );
};

export default VideoGuides;
