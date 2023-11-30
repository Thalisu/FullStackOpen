const Blog = ({ blog }) => (
  <>
    {blog.title} {blog.author} || Added by:  {blog.user.username}
  </>
);

export default Blog;
