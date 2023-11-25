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

  let mostLiked = "";
  let BlogQuantity = 0;
  for (let index = 0, verifyBlogQuantity; index < authors.length; index++) {
    verifyBlogQuantity = blogs.filter(
      (blog) => blog.author === authors[index]
    ).length;

    if (verifyBlogQuantity > BlogQuantity) {
      BlogQuantity = verifyBlogQuantity;
      mostLiked = authors[index];
    }
  }

  return {
    author: mostLiked,
    blogs: blogs.filter((blog) => blog.author === mostLiked).length,
  };
};

const mostLikes = (blogs) => {
  let authors = blogs.map((blog) => blog.author);
  authors = [...new Set(authors)];

  let mostLiked = "";
  let likes = 0;
  for (let index = 0; index < authors.length; index++) {
    let getBlogs = blogs.filter((blog) => blog.author === authors[index]);
    let getQttOfLikes = Math.max(...getBlogs.map((blog) => blog.likes));
    if (getQttOfLikes > likes) {
      likes = getQttOfLikes;
      mostLiked = authors[index];
    }
  }

  return {
    author: mostLiked,
    likes: likes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
