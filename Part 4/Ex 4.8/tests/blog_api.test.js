const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("GET /blogs", async () => {
  const response = await api
    .get("/blogs")
    .expect("Content-Type", /application\/json/);
  expect(response.body.length).toEqual(1);
});

afterAll(async () => {
  await mongoose.connection.close();
});
