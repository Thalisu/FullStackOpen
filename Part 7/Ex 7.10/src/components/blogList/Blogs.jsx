import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBlog } from "../../reducers/blogs/actionCreators";
import { useSelector } from "react-redux";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);
  return (
    <ol>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <div>{blog.title}</div>
        </li>
      ))}
    </ol>
  );
};

export default Blogs;
