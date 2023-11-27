const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("GET /blogs", async () => {
  const newBlog = {
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
  };

  const initialBlogs = await api.get("/blogs");

  await api
    .post("/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);
    
  const response = await api.get("/blogs");
  expect(response.body).toHaveLength(initialBlogs.body.length + 1);
});

afterAll(async () => {
  await mongoose.connection.close();
});
