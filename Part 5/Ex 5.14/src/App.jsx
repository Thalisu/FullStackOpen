import { useState, useEffect } from "react";
import Blog from "./components/currentBlogs/index";
import blogService from "./services/blogs";
import Login from "./components/index";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [Message, setMessage] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div>
      <h1>{Message}</h1>
      <Login setMessage={setMessage} blogs={{ blogs, setBlogs }} />
      <h1>current added blogs</h1>
      <Blog blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
};

export default App;
