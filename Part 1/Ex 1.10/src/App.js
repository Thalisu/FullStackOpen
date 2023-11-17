import { useState } from "react";
import { StatisticList } from "./statisticList";
import { Button } from "./button";
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
      <h1>Give feedback</h1>
      <div>
        <Button text={"good"} clickHandler={clickHandler} />
        <Button text={"neutral"} clickHandler={clickHandler} />
        <Button text={"bad"} clickHandler={clickHandler} />
      </div>
      <h2>Statistics</h2>
      <ul>
        <StatisticList feedback={[good, neutral, bad]} />
      </ul>
    </>
  );
};

export default App;
