import React from "react";
import { Card } from "components/ui";
import { TextEllipsis } from "components/shared";

const VideoCard = ({ item }) => {
  const { title, summary, video } = item;

  const cardHeader = (
    <div className="rounded-tl-lg rounded-tr-lg overflow-hidden h-[220px] w-full flex flex-col justify-between">
      <img
        src={video?.thumbnailUrl}
        alt="card header"
        className="h-full w-full"
        style={{ objectFit: "cover" }}
      />
    </div>
  );

  return (
    <Card
      clickable
      className="hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid "
      header={cardHeader}
      headerClass="p-0"
      footerBorder={false}
      headerBorder={false}
    >
      <div className="flex flex-col justify-between h-full">
        <a href={video?.url} target="_blank">
          <h4 className="font-bold my-1">{title}</h4>
          <TextEllipsis text={summary} maxTextCount={300} />
        </a>
      </div>
    </Card>
  );
};

export default VideoCard;
