/* eslint-disable no-undef */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

let phoneBook = require("./db.json");
phoneBook = phoneBook.persons;

const app = express();

app.use(express.json());
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      tokens.method(req, res) === "POST" ? JSON.stringify(req.body) : "",
    ].join(" ");
  })
);
app.use(cors());
app.use(express.static("build"));

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/persons", (request, response) => {
  response.json(phoneBook);
});

app.get("/info", (request, response) => {
  response.send(`
  <p>Phonebook has info for ${phoneBook.length} people</p>
  <p>${new Date().toString()}</p>
  `);
});

app.get("/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = phoneBook.find((person) => person.id === id);
  person ? response.json(person) : response.status(404).end();
});

app.delete("/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  phoneBook = phoneBook.filter((person) => person.id !== id);
  response.status(204).end();
});

app.post("/persons", (request, response) => {
  const id = Math.max(
    ...phoneBook.map((person) => {
      return person.id + 1;
    })
  );
  let newPerson = request.body;

  if (!newPerson.name || !newPerson.number) {
    return response.status(400).json({
      error: "name or number is missing",
    });
  }

  if (phoneBook.find((person) => person.name === newPerson.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  newPerson = {
    id: id,
    name: newPerson.name,
    number: newPerson.number,
  };
  phoneBook = phoneBook.concat(newPerson);
  response.json(newPerson);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
