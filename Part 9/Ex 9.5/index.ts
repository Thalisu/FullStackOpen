import express from "express";
import calculateBmi from "./bmiCalculator";

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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
