import { Router } from "express";
import { info } from "../utils/logger";
import data from "../../data/diagnoses";
import { diagnosis } from "../types";

const diagnosesRouter = Router();

diagnosesRouter.get("/", (_req, res) => {
  const diagnoses = data.map((d): diagnosis => {
    return {
      code: d.code,
      name: d.name,
      latin: d?.latin,
    };
  });

  info("get diagnoses");
  res.json(diagnoses);
});

export default diagnosesRouter;
