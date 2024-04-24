const Blog = require("./blog");
const User = require("./user");
const Team = require("./team");
const Membership = require("./membership");
const UserBlogs = require("./user_blogs");
const ReadingList = require("./reading_list");

User.hasMany(Blog);
Blog.belongsTo(User);

User.belongsToMany(Team, { through: Membership });
Team.belongsToMany(User, { through: Membership });

Blog.belongsToMany(Blog, { through: UserBlogs, as: "marked_blogs" });
Blog.belongsToMany(User, { through: UserBlogs, as: "users_marked" });

Blog.belongsToMany(User, { through: ReadingList, as: "users_reading_list" });

module.exports = {
  Blog,
  User,
  Team,
  Membership,
};
