import addBlog from "./addBlog";
import { useState } from "react";

const NewBlogForm = ({ blogs, setBlogs }) => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    url: "",
    likes: "",
  });
  return (
    <form onSubmit={(event) => addBlog(event, newBlog, blogs, setBlogs)}>
      <h4>wish to send a blog?</h4>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        required
        value={newBlog.title}
        onChange={({ target }) =>
          setNewBlog((newBlog) => ({ ...newBlog, title: target.value }))
        }
      />
      <label htmlFor="author">Author:</label>
      <input
        id="author"
        required
        value={newBlog.author}
        onChange={({ target }) =>
          setNewBlog((newBlog) => ({ ...newBlog, author: target.value }))
        }
      />
      <label htmlFor="url">Url:</label>
      <input
        id="url"
        required
        value={newBlog.url}
        onChange={({ target }) =>
          setNewBlog((newBlog) => ({ ...newBlog, url: target.value }))
        }
      />
      <label htmlFor="likes">Likes:</label>
      <input
        id="likes"
        value={newBlog.likes}
        onChange={({ target }) =>
          setNewBlog((newBlog) => ({ ...newBlog, likes: target.value }))
        }
      />
      <button type="submit">send</button>
    </form>
  );
};

export default NewBlogForm;
