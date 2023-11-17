import { Parts } from "./parts.js";
export function Contents({
  contents: {
    0: { name: part1 },
    0: { exercises: exercise1 },
    1: { name: part2 },
    1: { exercises: exercise2 },
    2: { name: part3 },
    2: { exercises: exercise3 },
  },
}) {
  let parts = [part1, part2, part3],
    exercises = [exercise1, exercise2, exercise3];
  return (
    <div>
      {parts.map((x, index) => {
        return (
          <Parts
            key={index}
            parts={parts[index]}
            exercises={exercises[index]}
          />
        );
      })}
    </div>
  );
}
