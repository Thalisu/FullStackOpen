const dummy = (blogs) => {
  return Array.isArray(blogs) ? 1 : 0;
};

const totalLikes = (blogs) => {
  return blogs.reduce((acc, blog) => (acc += blog.likes), 0);
};

const favoriteBlog = (blogs) => {
  let index = blogs.reduce(
    (acc, blog) => (acc = blog.likes > acc ? blog.likes : acc),
    0
  );
  return blogs.find((blog) => blog.likes === index);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
