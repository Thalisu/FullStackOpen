import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBlog } from "../reducers/blogs/actionCreators";
import { useSelector } from "react-redux";

const App = () => {
  const blogs = useSelector((state) => state.blogSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  return (
    <div>
      <h1>current added blogs</h1>
      <ol>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <div>{blog.title}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
