import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const User = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.find((user) => user.id === id)
  );
  return (
    user && (
      <div>
        <h1>User</h1>
        <h2>{user.username}</h2>
        <h4>added blogs</h4>
        {user.blogs[0] ? (
          <ul>
            {user.blogs.map((blog) => {
              return (
                <li key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>no blogs added</p>
        )}
      </div>
    )
  );
};
export default User;
