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

const mostBlogs = (blogs) => {
  let authors = blogs.map((blog) => blog.author);
  authors = [...new Set(authors)];

  let mostBlogsIsFrom = "";
  let BlogQuantity = 0;
  for (let index = 0, verifyBlogQuantity; index < authors.length; index++) {
    verifyBlogQuantity = blogs.filter(
      (blog) => blog.author === authors[index]
    ).length;

    if (verifyBlogQuantity > BlogQuantity) {
      BlogQuantity = verifyBlogQuantity;
      mostBlogsIsFrom = authors[index];
    }
  }

  return {
    author: mostBlogsIsFrom,
    blogs: blogs.filter((blog) => blog.author === mostBlogsIsFrom).length,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
