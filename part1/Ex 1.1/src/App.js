import { Header } from "./header.js";
import { Contents } from "./contents.js";
import { Total } from "./total.js";
const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const part1 = "Fundamentos da biblioteca React";
  const exercises1 = 10;
  const part2 = "Usando props para passar dados";
  const exercises2 = 7;
  const part3 = "Estado de um componente";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Contents
        parts={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
