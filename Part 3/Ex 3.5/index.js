const express = require("express");
const app = express();

let phoneBook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(phoneBook);
});

app.get("/info", (request, response) => {
  response.send(`
  <p>Phonebook has info for ${phoneBook.length} people</p>
  <p>${new Date().toString()}</p>
  `);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = phoneBook.find((person) => person.id === id);
  person ? response.json(person) : response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  phoneBook = phoneBook.filter((person) => person.id !== id);
  response.status(204).end();
});

app.use(express.json());
app.post("/api/persons", (request, response) => {
  const newPerson = request.body;
  const id = Math.max(
    ...phoneBook.map((x, i) => {
      return x.id + 1;
    })
  );
  newPerson.id = id;
  phoneBook = phoneBook.concat(newPerson);
  console.log(newPerson);
  response.status(200).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
