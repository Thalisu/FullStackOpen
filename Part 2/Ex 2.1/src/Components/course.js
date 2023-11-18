import { Header } from "./header";
import { Content } from "./content";
import { Total } from "./total";
export const Course = ({ course: { name, parts } }) => (
  <div>
    <Header course={name} />
    <Content parts={parts} />
    <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
  </div>
);
