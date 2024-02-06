import data from "../../data/patients";
import { Router } from "express";
import { patients } from "../types";
import { parseGender } from "../utils/typeGuards";
import { info } from "../utils/logger";

const patientsRouter = Router();

patientsRouter.get("/", (_req, res) => {
  const patients = data.map((d): patients => {
    return {
      id: d.id,
      name: d.name,
      occupation: d.occupation,
      gender: parseGender(d.gender, d.id),
      dateOfBirth: d?.dateOfBirth,
    };
  });

  info(`get patients`);
  res.json(patients);
});

export default patientsRouter;
