const dummy = (blogs) => {
  return Array.isArray(blogs) ? 1 : 0;
};

const totalLikes = (blogs) => {
  return blogs.reduce((acc, blog) => (acc += blog.likes), 0);
};

module.exports = {
  dummy,
  totalLikes,
};
