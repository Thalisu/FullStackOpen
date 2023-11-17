import { Header } from "./header.js";
import { Contents } from "./contents.js";
import { Total } from "./total.js";
const App = () => {
  const course = {
    name: "Desenvolvimento de aplicação Half Stack",
    parts: [
      {
        name: "Fundamentos da biblioteca React",
        exercises: 10,
      },
      {
        name: "Usando props para passar dados",
        exercises: 7,
      },
      {
        name: "Estado de um componente",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Contents
        contents={[course.parts[0], course.parts[1], course.parts[2]]}
      />
      <Total
        exercises={[
          course.parts[0].exercises,
          course.parts[1].exercises,
          course.parts[2].exercises,
        ]}
      />
    </>
  );
};

export default App;
