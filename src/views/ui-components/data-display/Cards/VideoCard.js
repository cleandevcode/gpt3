import React from "react";
import { Card } from "components/ui";
import { TextEllipsis } from "components/shared";
import { HiArrowRight, HiOutlineClock } from "react-icons/hi";

const VideoCard = ({ item }) => {
  const { title, summary, video, duration } = item;

  const cardFooter = (
    <div className="flex items-center justify-between">
      <div className="flex items-center ">
        <h6 className="text-sm">{duration} mins</h6>
        <HiOutlineClock className="ml-1" />
      </div>
      <div className="text-sm text-bold flex items-center">
        WATCH
        <HiArrowRight className="ml-3" />
      </div>
    </div>
  );

  const cardHeader = (
    <div className="rounded-tl-lg rounded-tr-lg overflow-hidden h-[220px] w-full">
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
      className="hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid h-[520px] flex flex-col justify-between"
      header={cardHeader}
      footer={cardFooter}
      headerClass="p-0"
      footerBorder={false}
      headerBorder={false}
    >
      <a href={video?.url} target="_blank">
        <h4 className="font-bold my-1">{title}</h4>
        <TextEllipsis text={summary} maxTextCount={300} />
      </a>
    </Card>
  );
};

export default VideoCard;
