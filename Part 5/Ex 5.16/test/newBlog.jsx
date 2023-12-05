import { useState } from "react";

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: "", author: "", url: "" });

  const addBlog = (event) => {
    event.preventDefault();
    createBlog({ ...newBlog, likes: 0 });
    setNewBlog({ title: "", author: "", url: "" });
  };

  return (
    <div className="formDiv">
      <h2>Create a new blog</h2>

      <form onSubmit={addBlog}>
        <input
          value={newBlog.title}
          onChange={({ target }) =>
            setNewBlog((newBlog) => ({ ...newBlog, title: target.value }))
          }
          placeholder="blog title"
        />
        <input
          value={newBlog.author}
          onChange={({ target }) =>
            setNewBlog((newBlog) => ({ ...newBlog, author: target.value }))
          }
          placeholder="blog author"
        />
        <input
          value={newBlog.url}
          onChange={({ target }) =>
            setNewBlog((newBlog) => ({ ...newBlog, url: target.value }))
          }
          placeholder="blog url"
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default BlogForm;
