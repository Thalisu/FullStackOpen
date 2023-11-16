import { Header } from "./header.js";
import { Contents } from "./contents.js";
import { Total } from "./total.js";
const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const parts = [
    "Fundamentos da biblioteca React",
    "Usando props para passar dados",
    "Estado de um componente",
  ];
  const exercises = [10, 7, 14];

  return (
    <>
      <Header course={course} />
      <Contents contents={[parts, exercises]} />
      <Total exercises={exercises} />
    </>
  );
};

export default App;
