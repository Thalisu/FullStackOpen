import { Header } from "./header.js";
import { Contents } from "./contents.js";
import { Total } from "./total.js";
const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const part1 = {
    name: "Fundamentos da biblioteca React",
    exercises: 10,
  };
  const part2 = {
    name: "Usando props para passar dados",
    exercises: 7,
  };
  const part3 = {
    name: "Estado de um componente",
    exercises: 14,
  };

  return (
    <>
      <Header course={course} />
      <Contents contents={[part1, part2, part3]} />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </>
  );
};

export default App;
