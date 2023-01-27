import React from "react";
import { Card } from "components/ui";
import moment from "moment";
import { HiOutlineClock } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { SUPPORT_RESOURCES_PREFIX_PATH } from "constants/route.constant";

const Blog = ({ blog }) => {
  const navigate = useNavigate();
  const { title, content, image, createdat, slug } = blog;

  const cardFooter = (
    <div className="flex items-center justify-start">
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
      className="hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid "
      header={cardHeader}
      footer={cardFooter}
      headerClass="p-0"
      footerBorder={false}
      headerBorder={false}
      onClick={() => {
        navigate(`${SUPPORT_RESOURCES_PREFIX_PATH}/blogs/${slug}`);
      }}
    >
      <h4 className="font-bold my-1 mb-6">{title}</h4>
      <p>{content}</p>
    </Card>
    // </div>
  );
};

export default Blog;
