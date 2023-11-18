import { Header } from "./header";
import { Content } from "./content";
import { Total } from "./total";
export const Course = ({ courses }) => (
  <div>
    {courses.map((course, i) => {
      return (
        <div key={i}>
          <Header course={course.name} />
          <Content content={course.parts} />
          <Total total={course.parts} />
        </div>
      );
    })}
  </div>
);
