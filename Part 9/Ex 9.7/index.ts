import express from "express";
import calculateBmi from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";

type param = Record<string, unknown>;

const app = express();
app.use(express.json());

app.get("/bmi", (req, res) => {
  const height = parseInt(req.query.height as string);
  const weight = parseInt(req.query.weight as string);

  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(height, weight);

  res.json({
    weight,
    height,
    bmi,
  });
});

app.post("/exercises", (req, res) => {
  const exercises = Object.values(req.body as param)[0] as number[];
  const target = Object.values(req.body as param)[1] as number;

  if (exercises === undefined || target === undefined)
    res.status(400).json({ error: "parameters missing" });

  for (let i = 0; i < exercises.length; i++) {
    if (isNaN(exercises[i]))
      res.status(400).json({ error: "malformatted parameters" });
  }
  if (isNaN(target)) {
    res.status(400).json({ error: "malformatted parameters" });
  }

  res.json(calculateExercises(exercises, target));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
