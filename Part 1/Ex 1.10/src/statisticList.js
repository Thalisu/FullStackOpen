export function StatisticList({ feedback: { 0: good, 1: neutral, 2: bad } }) {
  if (!good && !neutral && !bad) return <li>No feedbacks</li>;
  return (
    <>
      <li>Good {good}</li>
      <li>Neutral {neutral}</li>
      <li>Bad {bad}</li>
      <li>All {good + neutral + bad}</li>
      <li>
        Average {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
      </li>
      <li>Positive {(good / (good + neutral + bad)) * 100}%</li>
    </>
  );
}
