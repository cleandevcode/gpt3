import { Loading } from "components/shared";
import { useQuery } from "graphql-hooks";
import Blog from "views/ui-components/data-display/Cards/Blog";

const BLOGS_QUERY = `
query getBlogs {
  allBlogs {
    title
    slug
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
    image {
      url
    }
  }
}
`;

const Blogs = () => {
  const { loading, data } = useQuery(BLOGS_QUERY);

  return (
    <div className="flex flex-col gap-4 h-full">
      <h3 className="mb-5">Blogs</h3>
      <Loading loading={loading}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {!loading &&
            data?.allBlogs &&
            data?.allBlogs?.length > 0 &&
            data?.allBlogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
        </div>
      </Loading>
    </div>
  );
};

export default Blogs;
