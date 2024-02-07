import { CoursePart } from "../types";
import { assertNever } from "../utils";

const baseStyle = {
  margin: "16px 0 0 0",
};
const descriptionStyle = {
  margin: "0 0 0 0",
};

const Part = ({ part }: { part: CoursePart }): JSX.Element => {
  const partBase = (
    <p style={baseStyle}>
      {part.name} {part.exerciseCount}
    </p>
  );

  switch (part.kind) {
    case "basic":
      return (
        <>
          <b>{partBase}</b>
          <p style={descriptionStyle}>
            <em>{part.description}</em>
          </p>
        </>
      );
    case "background":
      return (
        <>
          <b>{partBase}</b>
          <p style={descriptionStyle}>
            <em>{part.description}</em>
          </p>
          <span>
            submit to:{" "}
            <a href={part.backgroundMaterial}>{part.backgroundMaterial}</a>
          </span>
          ;
        </>
      );
    case "group":
      return (
        <>
          <b>{partBase}</b>
          <span>project exercises: {part.groupProjectCount}</span>
        </>
      );
    case "special":
      return (
        <>
          <b>{partBase}</b>
          <p style={descriptionStyle}>{part.description}</p>
          <span>required skills: {part.requirements.join(", ")}</span>
        </>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
