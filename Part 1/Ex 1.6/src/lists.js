export function Lists({ feedback: { 0: good, 1: neutral, 2: bad } }) {
  if (!good && !neutral && !bad) return <p>No feedbacks</p>;
  return (
    <ul>
      <li>good {good}</li>
      <li>neutral {neutral}</li>
      <li>bad {bad}</li>
    </ul>
  );
}
