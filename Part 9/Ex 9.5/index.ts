import express, { Request } from "express";
import qs from "querystring";
import calculateBmi from "./bmiCalculator";

interface CustomRequest extends Request {
  parsedQuery: qs.ParsedUrlQuery;
}

const app = express();
app.use((req: CustomRequest, _res, next) => {
  req.parsedQuery = qs.parse(req.url?.split("?")[1] || "");
  next();
});

app.get("/bmi", (req: CustomRequest, res) => {
  const height = parseInt(req.parsedQuery.height as string);
  const weight = parseInt(req.parsedQuery.weight as string);

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
