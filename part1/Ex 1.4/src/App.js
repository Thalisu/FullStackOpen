import { Header } from "./header.js";
import { Contents } from "./contents.js";
import { Total } from "./total.js";
const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const parts = [
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
  ];

  return (
    <>
      <Header course={course} />
      <Contents contents={[parts[0], parts[1], parts[2]]} />
      <Total
        exercises={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}
      />
    </>
  );
};

export default App;
