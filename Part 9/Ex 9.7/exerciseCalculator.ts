interface exercisesFeedback {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  success: boolean;
  rating: 1 | 2 | 3;
  ratingDescription: string;
}

/* const parseExerciseArgs = (args: string[]) => {
  const values = args.slice(2).map((a) => {
    if (!isNaN(Number(a))) return Number(a);
    else throw new Error("Provided values were not all numbers");
  });

  const exercises = values.slice(1);

  const target = values[0];
  return {
    exercises,
    target,
  };
}; */

const verifyRating = (target: number, average: number) => {
  const rating = target / average;
  if (rating <= 1) return 3;
  else if (rating > 1 && rating < 1.4) return 2;
  return 1;
};

const genRatingDescription = (rating: number) => {
  if (rating === 1) return "bad";
  else if (rating === 2) return "not too bad but could be better";
  return "good";
};

const calculateExercises = (
  exercises: number[],
  target: number
): exercisesFeedback => {
  const periodLength = exercises.length,
    trainingDays = exercises.filter((e) => e > 0).length,
    average = exercises.reduce((total, e) => e + total, 0) / exercises.length,
    success = average >= target,
    rating = verifyRating(target, average),
    ratingDescription = genRatingDescription(rating);

  return {
    periodLength,
    trainingDays,
    target,
    average,
    success,
    rating,
    ratingDescription,
  };
};

/* const { exercises, target } = parseExerciseArgs(process.argv);
try {
  console.log(calculateExercises(exercises, target));
} catch (error) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
} */

export default calculateExercises;
