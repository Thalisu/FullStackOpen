const tests = require("../utils/list_helper");

test("totalLikes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];

  const result = tests.totalLikes(listWithOneBlog);
  console.log(result);
  expect(result).toBe(5);
});
