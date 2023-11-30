import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import Login from "./components/login/index";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div>
      <h1>{errorMessage}</h1>
      <h1>current added blogs</h1>
      <ol>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Blog blog={blog} />
          </li>
        ))}
      </ol>
      <Login error={setErrorMessage} blogs={{ blogs, setBlogs }} />
    </div>
  );
};

export default App;
