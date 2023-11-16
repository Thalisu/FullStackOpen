import { Parts } from "./parts.js";
export function Contents({
  contents: { 0: parts },
  contents: { 1: exercises },
}) {
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
