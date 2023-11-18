import { Header } from "./header";
import { Content } from "./content";
import { Total } from "./total";
export const Course = ({ course: { name, parts } }) => (
  <div>
    <Header course={name} />
    <Content content={parts} />
    <Total total={parts} />
  </div>
);
