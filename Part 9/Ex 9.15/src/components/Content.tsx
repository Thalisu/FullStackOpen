import { CoursePart } from "../types";
import Part from "./Part";

const Content = ({
  courseParts,
}: {
  courseParts: CoursePart[];
}): JSX.Element => (
  <>
    {courseParts.map((p) => (
      <Part part={p} key={p.name} />
    ))}
  </>
);

export default Content;
