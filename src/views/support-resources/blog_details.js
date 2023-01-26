import { Loading } from "components/shared";
import { Avatar } from "components/ui";
import { useQuery } from "graphql-hooks";
import moment from "moment";
import { HiOutlineUser } from "react-icons/hi";
import { useParams } from "react-router-dom";

const BLOG_DETAIL = `
query getBlogDetail($filter: BlogModelFilter) {
  blog(filter: $filter) {
    title
    id
    createdat
    author {
      job
      name     
      avatar {
        url
      }
    }
    content
    description
    image {
      url
    }
  }
}
`;

const BlogDetail = () => {
  const { id: slug } = useParams();
  const { loading, data } = useQuery(BLOG_DETAIL, {
    variables: {
      filter: {
        slug: {
          eq: slug,
        },
      },
    },
  });

  return (
    <div className="flex flex-col gap-4 h-full">
      <Loading loading={loading}>
        <div>
          <h3 className="my-5">{data?.blog?.title}</h3>
          <p className="mb-3 text-justify">{data?.blog?.content}</p>

          <img
            src={data?.blog?.image?.url}
            className="w-full max-h-[500px]"
            style={{ objectFit: "cover" }}
          />
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center mt-3">
              <Avatar
                icon={<HiOutlineUser />}
                size={35}
                className="mr-2"
                shape="circle"
                src={data?.blog?.author?.avatar?.url}
              />
              <p className="text-justify"> {data?.blog?.author?.name}</p>
            </div>
            <span>{moment(data?.blog?.createdat).format("MMM DD, YYYY")}</span>
          </div>
          <p className="text-justify">{data?.blog?.description}</p>
        </div>
      </Loading>
    </div>
  );
};

export default BlogDetail;
