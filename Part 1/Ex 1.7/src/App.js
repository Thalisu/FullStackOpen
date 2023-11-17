import { useState } from "react";
import { Lists } from "./lists";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const clickHandler = (feedback) => {
    if (feedback === "good") setGood(good + 1);
    if (feedback === "neutral") setNeutral(neutral + 1);
    if (feedback === "bad") setBad(bad + 1);
  };
  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <div>
          <button onClick={() => clickHandler("good")}>good</button>
          <button onClick={() => clickHandler("neutral")}>neutral</button>
          <button onClick={() => clickHandler("bad")}>bad</button>
        </div>
      </div>
      <div>
        <h2>Statistics</h2>
        <Lists feedback={[good, neutral, bad]} />
      </div>
    </>
  );
};

export default App;
