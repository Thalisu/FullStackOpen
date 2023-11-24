const personsRouter = require("express").Router();
const Person = require("../models/person");

personsRouter.get("/", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

personsRouter.get("/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      person ? response.json(person) : response.status(404).end();
    })
    .catch((error) => next(error));
});

personsRouter.post("/", (request, response, next) => {
  let newPerson = request.body;

  const person = new Person({
    name: newPerson.name,
    number: newPerson.number,
  });

  person
    .save()
    .then((newPerson) => {
      response.json(newPerson);
    })
    .catch((error) => next(error));
});

personsRouter.delete("/:id", (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

module.exports = personsRouter;
