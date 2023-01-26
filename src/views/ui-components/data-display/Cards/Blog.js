import React from "react";
import { Card, Avatar } from "components/ui";
import moment from "moment";
import { TextEllipsis } from "components/shared";
import { HiClock, HiOutlineClock, HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { SUPPORT_RESOURCES_PREFIX_PATH } from "constants/route.constant";

const Blog = ({ blog }) => {
  const navigate = useNavigate();
  const { title, author, content, image, createdat, slug } = blog;

  const cardFooter = (
    <div className="flex items-center justify-start my-2">
      {/* <div className="flex items-center ">
        <Avatar
          size={35}
          className="mr-2"
          shape="circle"
          src={author?.avatar?.url}
          icon={<HiOutlineUser />}
        />
        <span>
          <h6 className="text-sm">{author?.name}</h6>
          <span className="text-xs">{author?.job}</span>
        </span>
      </div> */}
      <HiOutlineClock className="mr-2" size={20} />
      <span className="text-sm">
        {moment(createdat).format("MMM DD, YYYY")}
      </span>
    </div>
  );

  const cardHeader = (
    <div className="rounded-tl-lg rounded-tr-lg overflow-hidden h-[220px] w-full">
      <img
        src={image?.url}
        alt="card header"
        className="h-full w-full"
        style={{ objectFit: "cover" }}
      />
    </div>
  );

  return (
    // <div className="max-w-xs">
    <Card
      clickable
      className="hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid h-[520px] "
      header={cardHeader}
      footer={cardFooter}
      headerClass="p-0"
      footerBorder={false}
      headerBorder={false}
      onClick={() => {
        navigate(`${SUPPORT_RESOURCES_PREFIX_PATH}/blogs/${slug}`);
      }}
    >
      <h4 className="font-bold my-1">
        <TextEllipsis text={title} maxTextCount={75} />
      </h4>
      <TextEllipsis text={content} maxTextCount={200} />
    </Card>
    // </div>
  );
};

export default Blog;
