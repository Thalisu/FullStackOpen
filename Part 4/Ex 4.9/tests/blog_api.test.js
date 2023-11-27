const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("GET /blogs", async () => {
  const response = await api
    .get("/blogs")
    .expect("Content-Type", /application\/json/);
  for (let index = 0; index < response.body.length; index++) {
    expect(response.body[index].id).toBeDefined();
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});
